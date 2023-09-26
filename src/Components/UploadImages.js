import React from 'react';
import { StorageManager } from '@aws-amplify/ui-react-storage';
import '@aws-amplify/ui-react/styles.css';
import {
  Card,
  VisuallyHidden,
  Button,
  Flex,
  Text,
  Divider,
  Image,
  Loader,
  Icon,
} from '@aws-amplify/ui-react';

export const UploadImages = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Column 1: Upload for Target Model */}
      <div className="p-4">
        <h2 className="text-xl mb-4 text-center">Upload Model Photo</h2>
        <StorageManager
      acceptedFileTypes={['image/*']}
      accessLevel="public"
      maxFileCount={100}
      components={{
        Container({ children }) {
          return <Card variation="elevated">{children}</Card>;
        },
        DropZone({ children, displayText, inDropZone, ...rest }) {
          return (
            <Flex
              alignItems="center"
              direction="column"
              padding="medium"
              backgroundColor={inDropZone ? 'brand.primary.10' : ''}
              {...rest}
            >
              <Text>Drop Image Here</Text>
              <Divider size="small" label="or" maxWidth="10rem" />
              {children}
            </Flex>
          );
        },
        FilePicker({ onClick }) {
          return (
            <Button onClick={onClick} className="hover:bg-indigo-600 hover:text-white focus:border-indigo-600">
              Select Image
            </Button>
          );
        },
        FileList({ files, onCancelUpload, onDeleteUpload }) {
          return (
            <Flex direction="row">
              {files.map(({ file, key, progress, id, status, uploadTask }) => (
                <Flex
                  key={key}
                  justifyContent="center"
                  alignItems="center"
                  width="5rem"
                  height="5rem"
                  position="relative"
                >
                  <Image
                    borderRadius="small"
                    height="100%"
                    objectFit="cover"
                    src={URL.createObjectURL(file)}
                    alt={key}
                  />
                  {progress < 100 ? (
                    <Loader
                      position="absolute"
                      size="large"
                      percentage={progress}
                      isDeterminate
                      isPercentageTextHidden
                    />
                  ) : null}

                  <Button
                    opacity="50"
                    borderRadius="xxl"
                    backgroundColor="background.primary"
                    position="absolute"
                    variation="link"
                    size="small"
                    onClick={() => {
                      if (status === 'uploading') {
                        onCancelUpload({ id, uploadTask });
                      } else {
                        onDeleteUpload({ id });
                      }
                    }}
                  >
                    <Icon
                      fontSize="large"
                      color="font.error"
                      viewBox={{ width: 512, height: 512 }}
                      paths={[
                        {
                          d: 'M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z',
                          strokeWidth: '32',
                          fill: 'none',
                          strokeMiterlimit: '10',
                          stroke: 'currentColor',
                        },
                        {
                          d: 'M320 320L192 192m0 128l128-128',
                          strokeWidth: '32',
                          fill: 'none',
                          strokeLinecap: 'round',
                          stroke: 'currentColor',
                        },
                      ]}
                    />
                  </Button>
                </Flex>
              ))}
            </Flex>
          );
        },
      }}
    />
      </div>

      {/* Column 2: Upload for Target Garment */}
      <div className="p-4">
        <h2 className="text-xl mb-4 text-center">Upload Photo of Item to Try On</h2>
        <StorageManager
      acceptedFileTypes={['image/*']}
      accessLevel="public"
      maxFileCount={1}
      components={{
        Container({ children }) {
          return <Card variation="elevated">{children}</Card>;
        },
        DropZone({ children, displayText, inDropZone, ...rest }) {
          return (
            <Flex
              alignItems="center"
              direction="column"
              padding="medium"
              backgroundColor={inDropZone ? 'brand.primary.10' : ''}
              {...rest}
            >
              <Text>Drop Image Here</Text>
              <Divider size="small" label="or" maxWidth="10rem" />
              {children}
            </Flex>
          );
        },
        FilePicker({ onClick }) {
          return (
            <Button onClick={onClick} className="hover:bg-indigo-600 hover:text-white focus:border-indigo-600">
              Select Image
            </Button>
          );
        },
        FileList({ files, onCancelUpload, onDeleteUpload }) {
          return (
            <Flex direction="row">
              {files.map(({ file, key, progress, id, status, uploadTask }) => (
                <Flex
                  key={key}
                  justifyContent="center"
                  alignItems="center"
                  width="5rem"
                  height="5rem"
                  position="relative"
                >
                  <Image
                    borderRadius="small"
                    height="100%"
                    objectFit="cover"
                    src={URL.createObjectURL(file)}
                    alt={key}
                  />
                  {progress < 100 ? (
                    <Loader
                      position="absolute"
                      size="large"
                      percentage={progress}
                      isDeterminate
                      isPercentageTextHidden
                    />
                  ) : null}

                  <Button
                    opacity="50"
                    borderRadius="xxl"
                    backgroundColor="background.primary"
                    position="absolute"
                    variation="link"
                    size="small"
                    onClick={() => {
                      if (status === 'uploading') {
                        onCancelUpload({ id, uploadTask });
                      } else {
                        onDeleteUpload({ id });
                      }
                    }}
                  >
                    <Icon
                      fontSize="large"
                      color="font.error"
                      viewBox={{ width: 512, height: 512 }}
                      paths={[
                        {
                          d: 'M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z',
                          strokeWidth: '32',
                          fill: 'none',
                          strokeMiterlimit: '10',
                          stroke: 'currentColor',
                        },
                        {
                          d: 'M320 320L192 192m0 128l128-128',
                          strokeWidth: '32',
                          fill: 'none',
                          strokeLinecap: 'round',
                          stroke: 'currentColor',
                        },
                      ]}
                    />
                  </Button>
                </Flex>
              ))}
            </Flex>
          );
        },
      }}
    />
      </div>
    </div>
  );
};





