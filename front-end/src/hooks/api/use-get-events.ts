import { useFetchData } from "@hooks/use-fetch-data";
import { EventType } from "@utils/event-type.enum";
import { Pagination } from "@utils/pagination.dto";

export function useGetEvents(page: number, filter?: string) {
  const EVENTS_PER_PAGE = 5;
  let url = `/events?take=${EVENTS_PER_PAGE}&page=${page}`;
  if (filter) {
    url += `&filter=${filter}`;
  }
  const { data, error, loading } =
    useFetchData<Pagination<OutputGetEventsDto>>(url);
  return { data, error, loading };
}

export type OutputGetEventsDto = {
  id: string;
  name: string;
  type: EventType;
  place: {
    id: string;
    name: string;
    address: PlaceAddress;
    entries: string[];
  };
  duration: {
    startsAt: string;
    endsAt: string;
  };
};

type PlaceAddress = {
  city: string;
  state: string;
  zipCode: string;
  line: string;
  complement?: string;
};
