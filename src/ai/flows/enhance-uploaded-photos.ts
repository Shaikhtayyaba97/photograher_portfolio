'use server';

/**
 * @fileOverview This file defines a Genkit flow for enhancing uploaded photos using AI.
 *
 * - enhancePhoto - An async function that accepts a photo data URI and returns an enhanced version of the photo as a data URI.
 * - EnhancePhotoInput - The input type for the enhancePhoto function, which includes the photo data URI.
 * - EnhancePhotoOutput - The output type for the enhancePhoto function, which includes the enhanced photo data URI.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EnhancePhotoInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      'A photo to be enhanced, as a data URI that must include a MIME type and use Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.' // Ensure the description is a single line.
    ),
});
export type EnhancePhotoInput = z.infer<typeof EnhancePhotoInputSchema>;

const EnhancePhotoOutputSchema = z.object({
  enhancedPhotoDataUri: z.string().describe('The enhanced photo as a data URI.'),
});
export type EnhancePhotoOutput = z.infer<typeof EnhancePhotoOutputSchema>;

export async function enhancePhoto(input: EnhancePhotoInput): Promise<EnhancePhotoOutput> {
  return enhancePhotoFlow(input);
}

const enhancePhotoPrompt = ai.definePrompt({
  name: 'enhancePhotoPrompt',
  input: {schema: EnhancePhotoInputSchema},
  output: {schema: EnhancePhotoOutputSchema},
  prompt: `You are an AI photo enhancer. You will take a photo as input, and enhance the brightness, color balance and sharpness, and return the enhanced photo as a data URI.

Enhance this photo: {{media url=photoDataUri}}`,
});

const enhancePhotoFlow = ai.defineFlow(
  {
    name: 'enhancePhotoFlow',
    inputSchema: EnhancePhotoInputSchema,
    outputSchema: EnhancePhotoOutputSchema,
  },
  async input => {
    const {output} = await enhancePhotoPrompt(input);
    return output!;
  }
);
