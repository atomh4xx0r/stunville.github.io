function show_prompt()
{
    var name=prompt("Пожалуйста, введите ваше имя","Гарри Поттер");
    if (name!=null && name!="")
    {
        document.write("Привет " + name + "! Как дела сегодня?");
    }
}