import { FC, ReactNode } from "react";

import {
  ListItem,
  ListItemText,
  Card,
  CardContent,
  Typography,
  CardMedia,
} from "@mui/material";

type Props = {
  id: number;
  name: string;
  base_experience: number;
  sprites: object;
  height: number;
  weight: number;
  ability: string;
};

const PokemonListItem: FC<Props> = ({
  id,
  name,
  base_experience,
  sprites,
  height,
  weight,
  ability,
}): ReactNode => {
  return (
    <ListItem divider>
      <ListItemText primary={`${name}`} />
      <Card>
        <CardMedia
          component="img"
          height="200"
          image={sprites?.front_default}
          alt={name}
        />
        <CardContent>
          <Typography variant="h5" component="div" align="center">
            {name.charAt(0).toUpperCase() + name.slice(1)}
            {ability.charAt(0).toUpperCase() +
              ability.slice(1) +
              " - " +
              "Power: " +
              (Math.floor(Math.random() * 100) + 1)}
          </Typography>
        </CardContent>
      </Card>
    </ListItem>
  );
};

export default PokemonListItem;
