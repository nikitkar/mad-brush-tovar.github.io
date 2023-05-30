import { $authHost } from "./Http";

export const getDataTable = async (name) => {
  const { data } = await $authHost.get("/api/getDataTable/", {
    params: {
      name,
    },
  });

  return data;
};

export const deletedRow = async (id, nameTable, nameColumn) => {
  const { data } = await $authHost.get("/api/getDataTable/delete", {
    params: {
      id,
      nameTable,
      nameColumn,
    },
  });

  return data;
};

export const searchData = async (nameTable, nameColumn, content) => {
  const { data } = await $authHost.get("/api/getDataTable/search", {
    params: {
      nameTable,
      nameColumn,
      content
    },
  });

  return data;
};

export const sortData = async (nameTable, nameColumn, sortParam) => {
  const { data } = await $authHost.get("/api/getDataTable/sort", {
    params: {
      nameTable,
      nameColumn,
      sortParam,
    },
  });

  return data;
};

export const sortData_search = async (
  nameTable,
  nameColumnSeacrh,
  content,
  nameColumnSort,
  sortParam
) => {
  const { data } = await $authHost.get("/api/getDataTable/sort_search", {
    params: {
      nameTable,
      nameColumnSeacrh,
      content,
      nameColumnSort,
      sortParam,
    },
  });

  return data;
};

export const getDataUser_discount = async (nameColumn, sortParam = "ASC") => {
  const { data } = await $authHost.get("/api/getDataTable/users", {
    params: {
      nameColumn,
      sortParam,
    },
  });

  return data;
};

export const getClient_discount_search = async (
  columnNameSearch,
  content,
  columnNameSort,
  sortParam = "ASC"
) => {
  const { data } = await $authHost.get("/api/getDataTable/search_discount", {
    params: {
      columnNameSort,
      columnNameSearch,
      sortParam,
      content,
    },
  });

  return data;
};
