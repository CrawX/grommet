import * as React from 'react';

export interface FileInputProps {
  accept?: string;
  aggregateThreshold?: number;
  disabled?: boolean;
  fileLabel?: (...args: any[]) => void;
  id?: string;
  messages?: {
    browse?: string;
    dropPrompt?: string;
    dropPromptMultiple?: string;
    files?: string;
    remove?: string;
    removeAll?: string;
  };
  multiple?: boolean;
  name?: string;
}

declare const FileInput: React.ComponentClass<FileInputProps &
  JSX.IntrinsicElements['input']>;

export { FileInput };
