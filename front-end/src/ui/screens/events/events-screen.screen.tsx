import { useGetEvents } from "@hooks/api/use-get-events";
import { GenericTableScreen } from "@ui/screens/generic-table/generic-table.screen";
import { EventType } from "@utils/event-type.enum";
import { EventMapper } from "@utils/mappers/Event.mapper";
import { useState } from "react";

export function EventsScreen() {
  const [page, setPage] = useState(1);
  const { data: paginatedData, error, loading } = useGetEvents(page);
  const mappedData = paginatedData?.data.map(EventMapper.mapEventDataSummary);
  return (
    <GenericTableScreen<EventDataSummary>
      breadcrumbPages={[
        { name: "Home", href: "/" },
        { name: "Locais", href: "/locais" },
      ]}
      currentPageName="Locais"
      columsHeaderNames={[
        "Evento",
        "Tipo",
        "Local associado",
        "Endereço",
        "Portões cadastrados",
        "Data",
      ]}
      dataPropertiesToShow={[
        "name",
        "type",
        "placeName",
        "address",
        "gates",
        "startsAt",
      ]}
      data={mappedData || []}
      events={{
        onDelete,
        onEdit,
      }}
      pagination={{
        totalPages: paginatedData?.pageCount || 1,
        onPageChange: setPage,
      }}
      texts={{
        caption: "Confira a lista de todos os locais cadastrados",
        title: "Locais",
      }}
    />
  );
}

export type EventDataSummary = {
  id: string;
  name: string;
  type: EventType;
  placeName: string;
  address: string;
  gates: string;
  startsAt: string;
};

function onDelete(id: string, refreshScreen: () => void): Promise<void> {
  console.log(`Deleted id: ${id}`);
  refreshScreen();
  return Promise.resolve();
}

function onEdit(id: string): Promise<void> {
  console.log(`Updated id: ${id}`);
  return Promise.resolve();
}
