let Info = {
  name: "user",
  count: 0,
};

export default function userInfo() {
  const base = () => {
    console.log(Info);
  };

  base.change = (key: keyof typeof Info, value: string | number) => {
    if (typeof Info[key] === typeof value) {
      Info[key] = value as never;
    } else {
      console.log("Wrong type of Data");
    }
  };
  return base;
}
