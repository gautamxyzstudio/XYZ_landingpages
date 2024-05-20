'use client';
import TextInput from '@/components/atoms/textInput';
import { chau_philomene } from '@/ui/fonts';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Show,
} from '@chakra-ui/react';

import React, { memo, useMemo, useState } from 'react';
import ModalTextInput from './components/modalTextInput';
import Image from 'next/image';
import {
  ASTRONAUT_WAVING,
  CROSS,
  FRAME_BOTTOM,
  STAR_BG,
} from '../../../../public/exporter';
import Button from '@/components/atoms/button';

const CustomModal = () => {
  const [isModalVisible, updateIsModalVisible] = useState(true);
  const [state, dispatch] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const modalBodyStyles = useMemo(() => {
    return {
      padding: 0,
      borderRadius: 0,
      overflow: 'hidden',
    };
  }, []);

  const modalMainStyles: any = useMemo(() => {
    return {
      position: 'absolute',
      bottom: -24.5,
      right: -24.95,
    };
  }, []);

  return (
    <Show above="lg">
      <Modal
        size={'xl'}
        isOpen={isModalVisible}
        onClose={() => updateIsModalVisible(false)}
      >
        <ModalOverlay />
        <ModalContent maxH="554px" maxW="810px">
          <ModalBody borderRadius={12} style={modalBodyStyles}>
            <div className="bg-[#FAFAFA] overflow-hidden rounded-md">
              <div className="flex w-full flex-row items-center justify-center">
                <div className="w-[55%]  m-6">
                  <p
                    className={`text-blackText text-[24px] leading-7 ${chau_philomene.className}`}
                  >
                    Get in Touch
                  </p>
                  <p className="mt-1 text-grey font-regular text-xs leading-6">
                    Feel free to drop your details
                  </p>
                  <div className="mt-4 pr-[10px] relative">
                    <ModalTextInput
                      value={state.name}
                      onChange={(e) =>
                        dispatch((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                      placeholder={''}
                      title={'Name'}
                    />
                    <ModalTextInput
                      value={state.email}
                      onChange={(e) =>
                        dispatch((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                      placeholder={''}
                      title={'Email'}
                    />
                    <ModalTextInput
                      value={state.phone}
                      onChange={(e) =>
                        dispatch((prev) => ({
                          ...prev,
                          phone: e.target.value,
                        }))
                      }
                      placeholder={''}
                      title={'Phone Number'}
                    />
                    <div className="mb-5">
                      <p className="text-blackTexttext-[16px] leading-5 font-medium">
                        Message
                      </p>
                      <textarea
                        value={state.message}
                        onChange={(e) =>
                          dispatch((prev) => ({
                            ...prev,
                            message: e.target.value,
                          }))
                        }
                        className="mt-[5px]  h-[90px]  border-[1px] border-[#DBDBDB] resize-none outline-none w-full rounded-lg  py-3 px-3 flex-1"
                        title="Message"
                        rows={3}
                      />
                    </div>
                    <Button
                      height={'h-10'}
                      buttonType={'orange'}
                      title={'send'}
                      onPress={() => console.log('pressed')}
                    />
                    <Image
                      style={modalMainStyles}
                      src={FRAME_BOTTOM}
                      alt="FRAME BOTTOM"
                    />
                  </div>
                </div>
                <div className="flex  relative items-center justify-center">
                  <Image
                    onClick={() => updateIsModalVisible(false)}
                    className="absolute top-6 right-6 cursor-pointer"
                    src={CROSS}
                    alt="CROSS"
                  />
                  <Image width={427} src={STAR_BG} alt="STAT BG" />
                  <Image
                    className="absolute w-[60%] h-auto"
                    src={ASTRONAUT_WAVING}
                    alt="ASTRONAUT WAVING"
                  />
                </div>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Show>
  );
};

export default memo(CustomModal);
