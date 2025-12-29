
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getHealthTips = async (category: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Berikan 3 tips kesehatan profesional yang singkat dan padat mengenai: ${category}. Gunakan Bahasa Indonesia yang sopan dan mudah dimengerti.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              content: { type: Type.STRING }
            },
            required: ["title", "content"]
          }
        }
      }
    });

    const text = response.text;
    return JSON.parse(text || "[]");
  } catch (error) {
    console.error("Error fetching Gemini tips:", error);
    return [];
  }
};
