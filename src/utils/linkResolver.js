const linkResolver = (doc) => {
  console.log("1--->", doc);
  if (doc.type === "page") return `/${doc.uid}`;
  return "/";
};

export default linkResolver;
