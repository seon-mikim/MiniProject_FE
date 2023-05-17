export interface Content {
  eventId: number;
  eventType: string;
  startDate: string;
  endDate: string;
  userName: string;
  userEmail: string;
  userRole: string;
  imgUrl: string;
  thumbnailUri: string;
  createdAt: string;
  orderId: number;
  orderState: string;
  date: string;
}

export interface Sort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}

export interface Pageable {
  sort: Sort;
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  unpaged: boolean;
}

export interface Data {
  content: Content[];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: Pageable;
  size: number;
  sort: Sort;
  totalElements: number;
  totalPages: number;
}

export interface ResponesData {
  data: Data;
  errCode: number;
  msg: string;
  status: number;
}

export interface Props {
  handleTabClick: (breakDown: string) => void;
  handleButtonClick: (cardData: eventProps['eData'], status: string) => void;
  handleEventTypeSelect: (eventType: string) => void;
  handleSetPage: (pageNumber: number) => void;
  handleSelectType: (type: string) => void;
  handleSearchClick: (keyword: string) => void;
  handleModalOpen: () => void;
  data: Content[] | undefined;
  eventType: string;
  breakdownType: string;
  pageTotalNumber: number | undefined;
  currentPageNumber: number | undefined
}

export type SectionProps = Omit<Props, 'handleTabClick' | 'handleModalOpen'>;
export type CheckWrapperProps = Pick<Props, 'handleEventTypeSelect' | 'handleSelectType' | 'handleSearchClick'>;
export type PagenationProps = Pick<Props, 'handleSetPage' | 'pageTotalNumber'|'currentPageNumber'>;
export type CheckApprovalProps = Pick<Props, 'handleEventTypeSelect'>;
export type UserSelectProps = Pick<Props, 'handleSelectType'>;
export type UserSearchInputProps = Pick<Props, 'handleSearchClick'>;

export interface eventProps {
  eData: Content;
  handleButtonClick?: (cardData: eventProps['eData'], orderState: string) => void;
  breakdownType?: string;
}
