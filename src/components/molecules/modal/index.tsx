'use client';
import { chau_philomene } from '@/ui/fonts';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Show,
} from '@chakra-ui/react';

import React, { memo, useEffect, useMemo, useState } from 'react';
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
  const [isModalVisible, updateIsModalVisible] = useState(false);

  useEffect(() => {
    const modalShown = sessionStorage.getItem('modalShown');
    if (!modalShown) {
      const timer = setTimeout(() => {
        updateIsModalVisible(true);
        sessionStorage.setItem('modalShown', 'true');
      }, 1200);

      return () => clearTimeout(timer);
    }
  }, []);

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
    };
  }, []);

  const modalMainStyles: any = useMemo(() => {
    return {
      position: 'absolute',
      bottom: -28,
      right: -24.95,
    };
  }, []);

  const onClose = () => updateIsModalVisible(false);

  return (
    <Show above="lg">
      <Modal size={'xl'} isOpen={isModalVisible} onClose={onClose}>
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
                      height={'sm:h-[48px]'}
                      buttonType={'orange'}
                      title={'Send'}
                      onPress={() => console.log('pressed')}
                    />
                    <Image
                      style={modalMainStyles}
                      priority
                      src={FRAME_BOTTOM}
                      alt="FRAME BOTTOM"
                    />
                  </div>
                </div>
                <div className="flex bg-black  relative items-center justify-center">
                  <Image
                    onClick={onClose}
                    className="absolute top-6 right-6 cursor-pointer z"
                    src={CROSS}
                    alt="CROSS"
                  />
                  <Image width={450} height={450} src={STAR_BG} alt="STAT BG" />
                  <Image
                    priority
                    className="absolute"
                    width={194}
                    height={248}
                    src={ASTRONAUT_WAVING}
                    loading="eager"
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
