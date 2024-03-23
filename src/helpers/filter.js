export const filterCampers = (campers, filter) => {
  return campers.filter((camper) => {
    if (
      filter.location &&
      !camper.location.toLowerCase().includes(filter.location.toLowerCase())
    ) {
      return false;
    }

    const details = filter.details;
    if (details) {
      if (
        details.ac &&
        (!camper.details || camper.details.airConditioner < 1)
      ) {
        return false;
      }
      if (details.automatic && camper.transmission !== "automatic") {
        return false;
      }
      if (details.kitchen && (!camper.details || camper.details.kitchen < 1)) {
        return false;
      }
      if (details.tv && (!camper.details || camper.details.TV < 1)) {
        return false;
      }
      if (
        details.bathroom &&
        (!camper.details || camper.details.bathroom < 1)
      ) {
        return false;
      }
    }

    const forms = filter.forms;
    if (forms && camper.form !== forms) {
      return false;
    }
    

    return true;
  });
};
