import IndexItem from "../../components/IndexItem";

export const indexItem = {
  render: IndexItem,
  description: "An item in the essay index.",
  children: ["paragraph"],
  attributes: {
    title: {
      type: String,
    },
    href: {
      type: String,
    },
    date: {
      type: String,
    },
  },
};
