"use client";

import { useState } from "react";
import Image from "next/image";
import { UploadCloud, Wand2, Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { handleEnhancePhoto } from "@/app/actions";

export function ImageEnhancer() {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [enhancedImage, setEnhancedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setOriginalImage(reader.result as string);
        setEnhancedImage(null);
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const onEnhance = async () => {
    if (!originalImage) return;
    setIsLoading(true);
    setError(null);
    setEnhancedImage(null);

    const result = await handleEnhancePhoto({ photoDataUri: originalImage });

    if (result.success && result.data?.enhancedPhotoDataUri) {
      setEnhancedImage(result.data.enhancedPhotoDataUri);
    } else {
      setError(result.message || "Failed to enhance the image.");
    }
    setIsLoading(false);
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex flex-col items-center justify-center border-2 border-dashed border-muted rounded-lg p-12 text-center">
            <UploadCloud className="w-12 h-12 text-muted-foreground" />
            <h3 className="mt-4 text-lg font-medium">Upload your photo</h3>
            <p className="mt-1 text-sm text-muted-foreground">PNG, JPG, WEBP accepted.</p>
            <Button asChild variant="outline" className="mt-4">
              <label htmlFor="file-upload" className="cursor-pointer">
                Browse Files
              </label>
            </Button>
            <input id="file-upload" type="file" className="sr-only" accept="image/png, image/jpeg, image/webp" onChange={handleFileChange} />
          </div>
        </CardContent>
      </Card>
      
      {originalImage && (
        <>
          <div className="text-center mb-8">
            <Button onClick={onEnhance} disabled={isLoading} size="lg">
              {isLoading ? (
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              ) : (
                <Wand2 className="mr-2 h-5 w-5" />
              )}
              {isLoading ? "Enhancing..." : "Enhance with AI"}
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-center mb-4">Original</h3>
              <Card>
                <CardContent className="p-2">
                  <div className="relative aspect-video">
                    <Image src={originalImage} alt="Original" fill className="object-contain rounded-md" />
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-center mb-4">Enhanced</h3>
              <Card className="aspect-video flex items-center justify-center">
                <CardContent className="p-2 w-full h-full">
                  <div className="relative w-full h-full">
                    {isLoading && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-card/80 rounded-md">
                        <Loader2 className="w-10 h-10 animate-spin text-primary" />
                        <p className="mt-4 text-muted-foreground">Enhancing image...</p>
                      </div>
                    )}
                    {error && (
                       <div className="absolute inset-0 flex flex-col items-center justify-center bg-destructive/10 rounded-md p-4">
                        <AlertCircle className="w-10 h-10 text-destructive" />
                        <p className="mt-4 text-destructive text-center max-w-xs">{error}</p>
                      </div>
                    )}
                    {enhancedImage && (
                      <Image src={enhancedImage} alt="Enhanced" fill className="object-contain rounded-md" />
                    )}
                    {!isLoading && !error && !enhancedImage && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-muted/50 rounded-md">
                            <p className="text-muted-foreground">Enhanced image will appear here</p>
                        </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
