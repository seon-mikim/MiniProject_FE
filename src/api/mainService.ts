import { EventOrderRequest } from "../interface/User";
import { axiosJsonInstance } from "./axios";

export const eventOrder = async (event: EventOrderRequest) => {
  try {
    const { data } = await axiosJsonInstance.post<EventOrderRequest>('/api/user/event/add', event);
    return data;
  } catch (error) {
    console.error(error);
  }
}


export const getEventList = async (eventType?:string,YearMonth?:string) => {
  try {
    const { data } = await axiosJsonInstance.get(eventType&&YearMonth?`api/user/event/list?eventType=${eventType}&yearMonth=${YearMonth}`:'api/user/event/list');
    console.log(data)
    return data.data;
  } catch (error) {
    console.error(error);
  }
}