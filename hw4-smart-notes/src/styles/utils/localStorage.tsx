const MY_PASS = 'MyPass';

export function loadState() {
  const data = localStorage.getItem(MY_PASS);
  if (!data) {
    return undefined;
  }
  const parsedData = JSON.parse(data)
  return {
    componentsSlice: parsedData.componentsSlice,
    tagsSlice: parsedData.tagsSlice,
  };
}

export function saveState(state: any) {
  const data = JSON.stringify(state);
  localStorage.setItem(MY_PASS, data);
}


