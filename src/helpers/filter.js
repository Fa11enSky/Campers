export const filterCampers = (campers, filter) => {
  return campers.filter((camper) => {
    // Фільтруємо за місцезнаходженням
    if (
      filter.location &&
      !camper.location.toLowerCase().includes(filter.location.toLowerCase())
    ) {
      return false;
    }

    // Фільтруємо за деталями
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

    // Фільтруємо за формою кемперу
    const forms = filter.forms;
    if (forms) {
      if (forms.panelTruck && camper.form !== "panelTruck") {
        return false;
      }
      if (forms.fullyIntegrated && camper.form !== "fullyIntegrated") {
        return false;
      }
      if (forms.alcove && camper.form !== "alcove") {
        return false;
      }
    }

    return true; // Повертаємо true, якщо кемпер відповідає всім умовам фільтру
  });
};
