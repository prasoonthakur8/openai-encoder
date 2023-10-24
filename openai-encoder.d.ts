declare module 'openai-encoder/src/encoder' {
    export function encode(text: string): string;
  }
  
  declare module 'openai-encoder/src/decoder' {
    export function decode(encodedText: string): string;
  }
  