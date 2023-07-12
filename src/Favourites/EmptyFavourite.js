import { Button } from "@mui/joy";

const EmptyFavourite = () => {
  return (
    <div className="empty_container">
      
      
      <div className="empty_title">Nothing here</div>
      <div className="empty_subtitle">
        Use the search bar to add instruments.
      </div>
      <Button style={{ marginTop: "1em" }}>Add Instrument</Button>
    </div>
  );
};

export default EmptyFavourite;
