import { EventOrderRequest } from "../interface/User";
import { axiosJsonInstance } from "./axios";
import { showToastError, showToastSuccess } from "../components/common/Tostify";

export const eventOrder = async (event: EventOrderRequest) => {
  try {
    const { data } = await axiosJsonInstance.post<EventOrderRequest>('/api/user/event/add', event);
    showToastSuccess('성공적으로 신청했습니다.');
    return data;
  } catch (error) {
    console.error(error);
    showToastError('옳바른 양식이 아닙니다.');
  }
}


export const getEventList = async (eventType?:string,YearMonth?:string) => {
  try {
    const { data } = await axiosJsonInstance.get(eventType&&YearMonth?`api/user/event/list?eventType=${eventType}&yearMonth=${YearMonth}`:'api/user/event/list');
    return data.data;
  } catch (error) {
    console.error(error);
  }
}