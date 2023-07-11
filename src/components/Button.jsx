function Button({
  link,
  children,
  className = "",
  classNameDiv = "",
  porDefecto = true,
}) {
  return (
    <div className={classNameDiv}>
      <a
        className={
          porDefecto
            ? className +
              "ring-2 py-1 px-5 rounded-full text-black font-medium hover:scale-110 transition duration-300"
            : className
        }
        href={link}
      >{children}</a>
    </div>
  );
}

export default Button;
