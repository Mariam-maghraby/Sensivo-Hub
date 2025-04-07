import { useState } from "react";
import cx from "clsx";
import { ScrollArea, Table } from "@mantine/core";
import classes from "./DevicesTable.module.css";
import { Device } from "../types/Devices";
import { useNavigate } from "react-router-dom";

export const DevicesTable: React.FC<{
  devices: Device[];
}> = ({ devices }) => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const rows = devices?.map((row) => (
    <Table.Tr key={row.name} onClick={() => navigate(`/device/${row.id}`)}>
      <Table.Td>{row.name}</Table.Td>
      <Table.Td>{row.temperature}</Table.Td>
      <Table.Td>{row.humidity}</Table.Td>
      <Table.Td>{row.totalPowerConsumption}</Table.Td>
      <Table.Td>{row.status}</Table.Td>
    </Table.Tr>
  ));

  return (
    <ScrollArea
      h={300}
      onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
      <Table miw={700}>
        <Table.Thead
          className={cx(classes.header, { [classes.scrolled]: scrolled })}>
          <Table.Tr>
            <Table.Th>Name</Table.Th>
            <Table.Th>Temperature</Table.Th>
            <Table.Th>Humidity</Table.Th>
            <Table.Th>Total Power Consumption</Table.Th>
            <Table.Th>Status</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </ScrollArea>
  );
};
