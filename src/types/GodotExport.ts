export interface ExportPresets {
  preset: { [key: string]: ExportPreset };
}

export interface ExportPreset {
  name: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export_path: string;
  platform: string;
  options: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'version/code': string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'version/name': string;
  };
}

export type BuildResult = {
  directory: string;
  sanitizedName: string;
  executablePath: string;
  directoryEntryCount: number;
  preset: ExportPreset;
  archivePath?: string;
};
