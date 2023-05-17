import { useState } from 'react';

import { getRequestList, postApproval } from '../api/request';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { ResponesData, eventProps } from '../interface/Admin';

export const useAdminApproval = () => {
  const [eventType, setEventType] = useState<string>('annual');
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [type, setType] = useState<string>('username');
  const [keyword, setKeyword] = useState<string>('');
  const [breakdownType, setBreakdownType] = useState<string>('request');
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [selectedCard, setSelectedCard] = useState<eventProps['eData']|null>(null);

  const queryClient = useQueryClient();
  const { data, isLoading, error } = useQuery<ResponesData>(
    ['admin', eventType, breakdownType, pageNumber, type, keyword],
    () => getRequestList(eventType, breakdownType, pageNumber, type, keyword),
    {
      onSuccess: (data) => {
        console.log(data);
      },
    },
  );

  const { mutate: approval, status } = useMutation(postApproval, {
    onSuccess: () => {
      queryClient.invalidateQueries(['admin', eventType, breakdownType, pageNumber, type, keyword]);
    },
  });

  const handleButtonClick = (cardData: eventProps['eData'], orderState: string) => {
    setSelectedCard({ ...cardData, orderState });
    setShowModal(!showModal);
  };

  const handleTabClick = (breakDown: string) => {
    setBreakdownType(breakDown);
  };

  const handleSetPage = (pageNumber: number) => {
    setPageNumber(pageNumber);
  };
  const handleModalClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) setIsShowModal(false);
  };

  const handleModalOpen = () => {
    setIsShowModal(true);
  };

  const handleSelectType = (type: string) => {
    setType(type);
  };

  const handleSearchClick = (keyword: string) => {
    setKeyword(keyword);
  };

  const handleEventTypeSelect = (eventType: string) => {
    setEventType(eventType);
  };

  return {
    showModal,
    isShowModal,
    selectedCard,
    eventType,
    breakdownType,
    data,
    isLoading,
    error,
    handleButtonClick,
    handleTabClick,
    handleModalClose,
    handleSetPage,
    handleModalOpen,
    handleSelectType,
    handleSearchClick,
    handleEventTypeSelect,
    approval,
    setShowModal,
  };
};
