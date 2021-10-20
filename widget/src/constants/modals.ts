export type FilterItemValue = {
  start: number;
  end: number;
};

export type FilterItem = {
  label: string;
  value: FilterItemValue;
};

export const FILTER_ITEMS: Array<FilterItem> = [
  {
    label: "No filter",
    value: {
      start: 0,
      end: 1000,
    },
  },
  {
    label: ">10",
    value: {
      start: 10,
      end: 1000,
    },
  },
  {
    label: ">100",
    value: {
      start: 100,
      end: 1000,
    },
  },
  {
    label: ">200",
    value: {
      start: 200,
      end: 1000,
    },
  },
  {
    label: ">300",
    value: {
      start: 300,
      end: 1000,
    },
  },
  {
    label: ">400",
    value: {
      start: 400,
      end: 1000,
    },
  },
  {
    label: ">500",
    value: {
      start: 500,
      end: 1000,
    },
  },
  {
    label: ">600",
    value: {
      start: 600,
      end: 1000,
    },
  },
  {
    label: ">700",
    value: {
      start: 700,
      end: 1000,
    },
  },
  {
    label: ">800",
    value: {
      start: 800,
      end: 1000,
    },
  },
  {
    label: ">900",
    value: {
      start: 900,
      end: 1000,
    },
  },
];
