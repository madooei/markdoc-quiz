import { Quiz } from "../../components";
import { Tag } from "@markdoc/markdoc";
import { v4 as uuidv4 } from 'uuid';

export const quiz = {
  render: Quiz,
  description: "Display the enclosed content in a Quiz component",
  children: ["paragraph", "tag", "list"],
  attributes: {
    shuffle: {
      type: Boolean,
      description: "Whether to shuffle the options",
    },
  },
  transform(node, config) {
    const attributes = node.transformAttributes(config);
    const children = node.transformChildren(config);
    const id = uuidv4();
    const output = new Tag(
      this.render,
      { ...attributes, id },
      children.map((child) => {
        if (child.name === "Option") {
          const { attributes: attrib } = child;
          return { ...child, attributes: { ...attrib, id } };
        }
        return child;
      })
    );

    console.log(
      JSON.stringify(
        {
          // node,
          // config,
          // attributes,
          // children,
          // id,
          output,
        },
        null,
        2
      )
    );

    return output;
  },
};
