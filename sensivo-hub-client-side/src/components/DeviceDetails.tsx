import { Container, Grid, Text } from "@mantine/core";
import { Device } from "../types/Devices";

// const child = <Skeleton height={140} radius="md" animate={false} />;

export const DeviceDetailsGrid: React.FC<{
  device: Device;
}> = ({ device }) => {
  return (
    <Container my="md">
      <Grid>
        {Object.entries(device).map(([key, value]) => (
          <Grid.Col key={key} span={{ base: 12, xs: 3 }}>
            <Text>
              <strong>{key}:</strong> {String(value)}
            </Text>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};
