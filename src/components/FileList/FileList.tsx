import React from 'react';

import { FileState } from '../../store/filesSlice';

enum FileStatus {
  ACTIVE = 'Active',
  INACTIVE = 'Inactive',
}

interface FileListProps {
  loading: boolean;
  files: FileState[];
}

export const FileList: React.FC<FileListProps> = ({ loading, files }) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!files.length) {
    return <div>The file list is empty</div>;
  }

  return (
    <div>
      <ul>
        {files.map((file: FileState) => (
          <li key={file.id}>
            {`${file.name} - ${file.active ? FileStatus.ACTIVE : FileStatus.INACTIVE} - ${file.id}`}
          </li>
        ))}
      </ul>
    </div>
  );
};
