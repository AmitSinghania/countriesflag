import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./CountryCard.css";

export default function MediaCard({
  name,
  flag,
  capital,
  languages,
  region,
  subregion,
  borders,
  population,
}) {
  return (
    <div className="country">
      <Card>
        <CardMedia
          component="img"
          className="country__flag"
          image={flag}
          alt={`${name} flag`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Capital - {capital}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            languages= {languages}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            region = {region}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            subregion = {subregion}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            borders = {borders}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            population= {population}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
