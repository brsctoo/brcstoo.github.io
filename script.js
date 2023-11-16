var TimesArray = [];
var NumeroDeTimes = 0

window.onload = function()
{
    GerarTimeEspecifico()
    GerarFiltro()
    GerarBotao()
}

class Time 
{
    constructor(Brasao, Nome, Estado, Estadoais, Brasileirao, CopaDoBrasil, Libertadores, Mundial, Cores) 
    {
        this.brasao = new Image()
        this.brasao.src = Brasao
        
        this.nome = Nome
        this.estado = Estado
        this.estadoais = Estadoais
        this.brasileirao = Brasileirao
        this.copaDoBrasil = CopaDoBrasil
        this.libertadores = Libertadores
        this.mundial = Mundial
        
        this.cores = Cores
        this.infoAbertas = false;
    }   
}

function GerarTimeEspecifico()  
{
    GerarTime(new Time("Imagens/BrasãoFlamengo.png", "Flamengo", "Rio de Janeiro", 
    37 + " títulos" + " \n(Campeonato Carioca: 1914, 1915, 1920, 1921, 1925, 1927, 1939, 1942, 1943, 1944, 1953, 1954, 1955, 1963, 1965, 1972, 1974, 1978, 1979, 1979, 1981, 1986, 1991, 1996, 1999, 2000, 2001, 2004, 2007, 2008, 2009, 2011, 2014, 2017, 2019, 2020 e 2021.)", 
    8 + " títulos" + " \n(1980, 1982, 1983, 1987, 1992, 2009, 2019 e 2020)", 4 + " títulos" + " \n(1990 (invicto), 2006, 2013 e 2022)", 
    3 + " títulos" + " \n(2006, 2013 e 2022)", 1 + " títulos" + " \n(1981)", ["rgba(234, 48, 36, 0.7)", "rgba(0, 0, 0, 0.7)", "rgba(188, 118, 113, 1)"]))
    
    GerarTime(new Time("Imagens/BrasãoVasco.png", "Vasco", "Rio de Janeiro",  
    24 + " títulos" + " \n(Campeonato Carioca: 1923, 1924, 1929, 1934, 1936, 1945, 1947, 1949, 1950, 1952, 1956, 1958, 1970, 1977, 1982, 1987, 1988, 1992, 1993, 1994, 1998, 2003, 2015 e 2016)", 
    4 + " títulos" + " \n(1974, 1989, 1997 e 2000.)", 1 + " títulos" + " \n(2011)", 
    1 + " títulos" + " \n(1998)", 0 + " títulos",["rgba(0, 0, 0, 0.7)", "rgba(255, 255, 255)", "rgba(255, 255, 255, 1)"]))

    GerarTime(new Time("Imagens/BrasãoFluminense.png", "Fluminense", "Rio de Janeiro",
    33 + " títulos" + " \n(Campeonato Carioca: 1906, 1907, 1908, 1909, 1911, 1917, 1918, 1919, 1924, 1936, 1937, 1938, 1940, 1941, 1946, 1951, 1959, 1964, 1969, 1971, 1973, 1975, 1976, 1980, 1983, 1984, 1985, 1995, 2002, 2005, 2012, 2022 e 2023)", 
    4 + " títulos" + " \n(1970, 1984, 2010 e 2012)", 1 + " títulos" + " \n(2007)", 
    1 + " títulos" + " \n(2023)", 0 + " títulos", ["rgba(145, 0, 40, 0.7)", "rgba(0, 105, 64, 0.7)", "rgba(159, 115, 127, 1)"]))
    
    GerarTime(new Time("Imagens/BrasãoPalmeiras.png", "Palmeiras", "São Paulo",
    25 + " títulos" + " \n(Campeonato Paulista: 1920 1926 1926 (Extra) 1927 1932 1933 1934 1936 1938 (Extra) 1940 1942 1944 1947 1950 1959 1963 1966 1972 1974 1976 1993 1994 1996 2008 2020 2022 2023)", 
    11 + " títulos" + " \n(1960 1967 1967 (Taça Brasil) 1969 1972 1973 1993 1994 2016 2018 2022)", 4 + " títulos" + " \n(1998 2012 2015 2020)", 
    3 + " títulos" + " \n(1999 2020 2021)", 0 + " títulos", ["rgba(0, 100, 55, 0.85)", "rgba(255, 255, 255, 0.85)", "rgba(77, 138, 111, 1)"]))

    GerarTime(new Time("Imagens/BrasãoSãoPaulo.png", "São Paulo", "São Paulo",
    22 + " títulos" + " \n(Campeonato Paulista: 1931, 1943, 1945, 1946, 1948, 1949, 1953, 1957, 1970, 1971, 1975, 1980, 1981, 1985, 1987, 1989, 1991, 1992, 1998, 2000, 2005, 2021)", 
    6 + " títulos" + " \n(1977 1986 1991 2006 2007 2008)", 1 + " títulos" + " \n(2023)", 
    3 + " títulos" + " \n(1992, 1993, 2005)", 3 + " títulos" + " \n(1992, 1993, 2005)", ["rgba(254, 0, 0, 0.7)", "rgba(255, 255, 255, 0.85)","rgba(255, 179, 179, 1)"]))

    GerarTime(new Time("Imagens/BrasãoInternacional.png", "Internacional", "Rio Grande do Sul",
    45 + " títulos" + " \n(Campeonato Gaúcho: 1927, 1934, 1940 até 1945, 1947, 1948, 1950, 1951, 1952, 1953, 1955, 1961, 1969 até 1978, 1981, 1982, 1983, 1984, 1991, 1992, 1994, 1997, 2002, 2003, 2004, 2005, 2008, 2009, 2011, 2012, 2013, 2014, 2015 e 2016)", 
    3 + " títulos" + " \n(1975, 1976 e 1979 (invicto)", 1 + " títulos" + " \n(1992))", 
    2 + " títulos" + " \n(2006 e 2010)", 1 + " títulos" + " \n(2006)", ["rgb(255, 0, 0, 0.7)", "rgb(255, 255, 255, 0.85)", "rgba(255, 179, 179, 1)"]))

    GerarTime(new Time("Imagens/BrasãoGrêmio.png", "Grêmio", "Rio Grande do Sul",
    42 + " títulos" + " \n(Campeonato Gaúcho: 1921, 1922, 1926, 1931, 1932, 1946, 1949, 1956 até 1960, 1962 até 1968, 1977, 1979, 1980, 1985, 1986, 1987, 1988, 1989, 1990, 1993, 1995, 1996, 1999, 2001, 2006, 2007, 2010, 2018, 2019, 2020, 2021, 2022 e 2023)",
    2 + " títulos" + " \n(1981 e 1996)", 5 + " títulos" + " \n(1989, 1994, 1997, 2001, 2016)", 
    3 + " títulos" + " \n(1983, 1995, 2017)", 1 + " títulos" + " \n(1983)", ["rgb(13, 128, 191, 0.85)", "rgb(255, 255, 255, 0.85)", "rgb(119, 180, 215, 1)"]))

    GerarTime(new Time("Imagens/BrasãoAthleticoParanaense.png", "Athletico-Pr", "Paraná",
    27 + " títulos" + " \n(Campeonato Paranaense: 1925, 1929, 1930, 1934, 1936, 1940, 1943, 1945, 1949, 1958, 1970, 1982, 1983, 1985, 1988, 1990, 1998, 2000, 2001, 2002, 2005, 2009, 2016, 2018, 2019, 2020 e 2023)", 
    1 + " títulos" + " \n(2001)", 1 + " títulos" + " \n(2019)", 
    0 + " títulos", 0 + " títulos", ["rgb(200, 16, 46, 0.7)", "rgb(45, 41, 38, 0.7)", "rgb(186, 106, 119, 1)"]))

    GerarTime(new Time("Imagens/BrasãoCorinthians.png", "Corinthians", "São Paulo",
    30 + " títulos" + " \n(Campeonato Paulista: 1914, 1916, 1922, 1923, 1924, 1928, 1929, 1930, 1937, 1938, 1939, 1941, 1951, 1952, 1954, 1977, 1979, 1982, 1983, 1988, 1995, 1997, 1999, 2001, 2003, 2009, 2013, 2017, 2018 e 2019)", 
    7 + " títulos" + " \n(1990, 1998, 1999, 2005, 2011, 2015, 2017)", 3 + " títulos" + " \n(1995, 2002, 2009)", 
    1 + " títulos" + " \n(2012)", 2 + " títulos"  + " \n(2010, 2012)", ["rgb(0, 0, 0)", "rgb(255, 255, 255)", "rgb(156, 156, 156, 1)"]))

    GerarTime(new Time("Imagens/BrasãoBotafogo.png", "Botafogo", "Rio de Janeiro",
    21 + " títulos" + " \n(Campeonato Carioca: 1907, 1910, 1912, 1930, 1932, 1933, 1934, 1935, 1947, 1961, 1962, 1967, 1968, 1989, 1990, 1997, 2006, 2007, 2008, 2010 e 2018)", 
    2 + " títulos" + " \n(1968 e 1995)", 0 + " títulos", 
    0 + " títulos", 0 + " títulos", ["rgb(0, 0, 0)", "rgb(255, 255, 255)", "rgb(255, 255, 255, 1)"]))

    GerarTime(new Time("Imagens/BrasãoBragantino.png", "Bragantino", "São Paulo",
    1 + " títulos" + " \n(Campeonato Paulista: 1990)",
    0 + " títulos", 0 + " títulos", 
    0 + " títulos", 0 + " títulos", ["rgb(255, 0, 0, 0.85)", "rgb(255, 255, 255, 0.85)", "rgba(255, 179, 179, 1)"]))

    GerarTime(new Time("Imagens/BrasãoSantos.png", "Santos", "São Paulo",
    22 + " títulos" + " \n(Campeonato Paulista: 1935, 1955, 1956, 1958, 1960, 1961, 1962, 1964, 1965, 1967, 1968, 1969, 1973, 1978, 1984, 2006, 2007, 2010, 2011, 2012, 2015 e 2016)", 
    8 + " títulos" + " \n(1961, 1962, 1963, 1964, 1965, 1968, 2002 e 2004)", 1 + " títulos" + " \n(2010)", 
    3 + " títulos" + " \n(1962, 1963 e 2011)", 2 + " títulos"  + " \n(1962 e 1963)", ["rgb(0, 0, 0)", "rgb(255, 255, 255)", "rgb(255, 255, 255)"]))
    
    GerarTime(new Time("Imagens/BrasãoAtléticoMineiro.png", "Atlético-MG", "Minas Gerais",
    47 + " títulos" + " \n(Campeonato Mineiro: 1915, 1926, 1927, 1931, 1932, 1936, 1938, 1939, 1941, 1942, 1946, 1947, 1949, 1950, 1952 até 1956, 1958, 1962, 1963, 1970, 1976, 1978 até 1983, 1985, 1986, 1988, 1989, 1991, 1995, 1999, 2000, 2007, 2010, 2012, 2013, 2015, 2017, 2020 até 2023)", 
    3 + " títulos" + " \n(1937, 1971, 2021)", 2 + " títulos" + " \n(2014, 2021)", 
    1 + " títulos" + " \n(2013)", 0 + " títulos", ["rgb(0, 0, 0)", "rgb(255, 255, 255)", "rgb(255, 255, 255)"]))

    GerarTime(new Time("Imagens/BrasãoCuiabá.png", "Cuiabá", "Mato Grosso",
    1 + " títulos" + " \n(Campeonato Mato-grossense: 2003, 2004, 2011, 2013, 2014, 2015, 2017, 2018, 2019, 2021 e 2022)",
    0 + " títulos", 0 + " títulos", 
    0 + " títulos", 0 + " títulos", ["rgb(34, 139, 34, 0.85)", "rgb(255, 255, 85, 0.85)", "rgb(255, 255, 142, 1)"]))

    GerarTime(new Time("Imagens/BrasãoFortaleza.png", "Fortaleza", "Ceará",
    46 + " títulos" + " \n(Campeonato Cearense: 1920, 1921, 1923, 1924, 1926 até 1928, 1933, 1934, 1937, 1938, 1946, 1947, 1949, 1953, 1954, 1959, 1960, 1964, 1965, 1967, 1969, 1973, 1974, 1982, 1983, 1985, 1987, 1991, 1992, 2000 até 2005, 2007 até 2010, 2015, 2016, 2019 até 2023)",
    0 + " títulos", 0 + " títulos", 
    0 + " títulos", 0 + " títulos", ["rgb(13, 90, 165, 0.85)", "rgb(227, 29, 26, 0.85)", "rgb(104, 151, 198, 1)"]))

    GerarTime(new Time("Imagens/BrasãoBahia.png", "Bahia", "Bahia",
    50 + " títulos" + " \n(Campeonato Baiano: 1931, 1933, 1934, 1936, 1938, 1940, 1944, 1945, 1947 até 1950, 1952, 1954, 1956, 1958 até 1960 até 1962, 1967, 1970, 1971, 1973 até 1979, 1981 até 1984, 1986, 1987, 1988, 1991, 1993, 1994, 1998, 1999, 2001, 2012, 2014, 2015, 2018 até 2020)",
    2 + " títulos" + " \n(1959, 1988)", 0 + " títulos", 
    0 + " títulos", 0 + " títulos", ["rgb(0, 108, 181, 0.85)", "rgb(237, 50, 55, 0.85)", "rgb(104, 151, 198, 1)"]))

    GerarTime(new Time("Imagens/BrasãoCruzeiro.png", "Cruzeiro", "Minas Gerais",
    38 + " títulos" + " \n(Campeonato Mineiro: 1926, 1928, 1929, 1930, 1940, 1943 até 1956, 1959, 1960, 1961, 1965 até 1969, 1972, 1973, 1974, 1975, 1977, 1984, 1987, 1990, 1992, 1994, 1996, 1997, 1998, 2002 até 2004, 2006, 2008, 2009, 2011, 2014, 2019)", 
    4 + " títulos" + " \n(1966, 2003, 2013, 2014)", 6 + "títulos" + " \n(1993, 1996, 2000, 2003, 2017, 2018)", 
    2 + " títulos" + " \n(1976, 1997)", 0 + " títulos", ["rgb(0, 91, 162, 0.85)", "rgb(255, 255, 255)", "rgb(104, 151, 198, 1)"]))

    GerarTime(new Time("Imagens/BrasãoGoiás.png", "Goiás", "Goiás",
    28 + " títulos" + " \n(Campeonato Goiano: 1966, 1971, 1972, 1975, 1976, 1981, 1983, 1986, 1987, 1989, 1990, 1991, 1994, 1996, 1997, 1998, 1999, 2000, 2002, 2003, 2006, 2009, 2012, 2013, 2015, 2016, 2017 e 2018)", 
    0 + " títulos", 0 + " títulos", 
    0 + " títulos", 0 + " títulos", ["rgb(0, 94, 79, 0.85)", "rgb(255, 255, 255)", "rgb(87, 128, 121, 1)"]))

    GerarTime(new Time("Imagens/BrasãoAméricaMineiro.png", "América-MG", "Minas Gerais",
    15 + " títulos" + " \n(Campeonato Mineiro: 1916, 1917, 1918, 1919, 1920, 1921, 1922, 1923, 1924, 1925, 1948, 1957, 1971, 1993, 2001)", 
    0 + " títulos", 0 + " títulos", 
    0 + " títulos", 0 + " títulos", ["rgb(0, 127, 78, 0.85)", "rgb(255, 255, 255)", "rgb(108, 162, 142, 1)"]))

    GerarTime(new Time("Imagens/BrasãoCoritiba.png", "Coritiba", "Paraná",
    38 + " títulos" + " \n(Campeonato Paranaense: 1916, 1927, 1931, 1933, 1935, 1939, 1941, 1942, 1946, 1947, 1951, 1952, 1954, 1956, 1957, 1959, 1960, 1968, 1969, 1971, 1972, 1973, 1974, 1975, 1976, 1978, 1979, 1986, 1989, 1999, 2003, 2004, 2008, 2010, 2011, 2012, 2013, 2017)", 
    1 + " títulos" + " \n(1985)", 0 + " títulos", 
    0 + " títulos",0 + " títulos", ["rgba(0, 100, 55, 0.85)", "rgba(255, 255, 255, 0.85)", "rgba(95, 151, 126, 1)"]))
}

function GerarTime(Time) 
{
    TimesArray.push(Time);

    NumeroDeTimes += 1;
    if(NumeroDeTimes == 20)
    {
        GerarTabela(Time, TimesArray, GerarFiltro())
    }
}

var existeFiltro = false
var header = document.querySelector('.container h1');

function GerarFiltro()
{
    if(!existeFiltro)
    {
        var Opcoes = []

        filtro = document.createElement("select")
        filtro.textContent = "Filtrar"
        document.body.appendChild(filtro)

        var newOption = document.createElement("option")
        newOption.value = "Todos"
        newOption.text = "Todos"
        Opcoes.push(newOption)
        filtro.add(newOption)    

        for(let i = 0; i < TimesArray.length; i++)
        {   
            var repetido = false

            for(let a = 0; a < Opcoes.length; a++)
            {
                if(TimesArray[i].estado == Opcoes[a]) 
                { 
                    repetido = true
                    break
                }
            }

            console.log(repetido)
            if(!repetido)
            {
                var newOption = document.createElement("option")
                newOption.value = TimesArray[i].estado
                newOption.text = TimesArray[i].estado
        
                Opcoes.push(newOption.value)
                filtro.add(newOption)
            }

            existeFiltro = true
            
        }

        header.appendChild(filtro);
        filtro.classList.add("Controller")
    }
    
    return filtro.value
}

function GerarBotao()
{
    var botaoGerarTabela = document.createElement("button")
    botaoGerarTabela.textContent = "Mostrar times";
    botaoGerarTabela.classList.add("botaoGerarTabela")
    document.body.appendChild(botaoGerarTabela)
    botaoGerarTabela.addEventListener("click", function()
    {
        GerarTabela(Time, TimesArray, GerarFiltro());
    })  

    header.appendChild(botaoGerarTabela);
    botaoGerarTabela.classList.add("Controller")
}

function ExcluirTabela()
{
    var Tables = document.querySelectorAll(".table");
    Tables.forEach(function (table) {
        table.remove();
    });
}

function GerarTabela(Time, TimesArray, valorFiltro) 
{   
    ExcluirTabela()

    
    var TimesFiltrados = []
    const tbl = document.createElement("table");
    tbl.classList.add("table");

    var timesPorLinha = 0;
    
    if(valorFiltro == "Todos")
    {
        TimesFiltrados = TimesArray
    }
    else
    {
        for (let i = 0; i < TimesArray.length; i++) 
        {
            if(TimesArray[i].estado == valorFiltro) {TimesFiltrados.push(TimesArray[i])}
        }
    }

    for (let i = 0; i < TimesFiltrados.length; i++) 
    {
        if (timesPorLinha == 0) {
            var row = document.createElement("tr");
        }

        row.classList.add("Row");
        const cell = document.createElement("td");
        cell.classList.add("Cell");

        const img = document.createElement("img");
        img.src = TimesFiltrados[i].brasao.src;

        img.style.width = "150px";
        img.style.height = "150px";

        img.onclick = (function (index) {
            return function () {
                Click(TimesFiltrados[index], cell, TimesFiltrados);
            };
        })(i);

        cell.appendChild(img);
        row.appendChild(cell);
        timesPorLinha += 1;

        if (timesPorLinha == 3 || i == TimesFiltrados.length - 1) 
        {
            tbl.appendChild(row);
            timesPorLinha = 0;
        }

        cell.style.setProperty('--color1', TimesFiltrados[i].cores[0]);
    }

    document.body.appendChild(tbl);
    
}

function FecharInformacoes()
{
    var usingRows = document.querySelectorAll(".newRow");
    usingRows.forEach(function (usingRow) {
        usingRow.remove();
    });

    var usingCells = document.querySelectorAll(".Cell");
    usingCells.forEach(function (usingCell) {
        usingCell.classList.remove("usingCell");
    });

    var newCells = document.querySelectorAll(".newCell");
    newCells.forEach(function (newCell) {
        newCell.parentNode.classList.remove('opened');
    });

    
}

function Click(Time, cell, TimesArray) 
{   
    for(i = 0; i < TimesArray.length; i++)
    {
        if(TimesArray[i].infoAbertas)
        {
            FecharInformacoes()
            TimesArray[i].infoAbertas = false
            
            if(TimesArray[i] == Time)
            {
                return
            }
        }
    }

    var timeClicado;

    if (Time.nome != timeClicado) {
        var informacoes = [Time.estadoais, Time.brasileirao, Time.estado, Time.copaDoBrasil, Time.libertadores, Time.mundial];
        var titulo = ["Campeonatos estaduais", "Títulos brasileiros (série A)", "Estado", "Copas do Brasil", "Libertadores", "Mundiais"];

        var newRow = document.createElement("tr");
        newRow.classList.add("newRow");
        cell.appendChild(newRow);

        cell.classList.add("usingCell");
        cell.style.setProperty('--color1', Time.cores[0]);
        cell.dataset.nome = Time.nome;
        cell.style.setProperty('--color2', Time.cores[1]);
        cell.style.setProperty('--color3', Time.cores[2]);

        let numColunas = 0;
        for (i = 0; i < informacoes.length; i++) 
        {
            var newCell = document.createElement("td");

            var titleElement = document.createElement("h4");
            titleElement.textContent = titulo[i];

            var infoElement = document.createElement("p");
            infoElement.textContent = informacoes[i];
            infoElement.innerHTML = infoElement.textContent.replace(/\n/g, "<br>");

            document.documentElement.style.setProperty('--titleColor', Time.cores[0]);

            newCell.appendChild(titleElement);
            newCell.appendChild(infoElement);

            newCell.classList.add("newCell", "infoBubble");
            newRow.style.background.color = 'rgb(0,0,0,0)';
            

            if(titulo[i] == "Libertadores")
            {
               var mundialRow =  document.createElement("tr")
               newCell.appendChild(mundialRow)
               newRow.appendChild(newCell);
            }
            else if(titulo[i] == "Mundiais")
            {
                mundialRow.appendChild(newCell)
            }
            else if(titulo[i] == "Títulos brasileiros (série A)")
            {
                var estadoRow =  document.createElement("tr")
                newCell.appendChild(estadoRow)
                newRow.appendChild(newCell);
            }
            else if(titulo[i] == "Estado")
            {
                estadoRow.appendChild(newCell)
            }
            else
            {
                newRow.appendChild(newCell);
            }
        }

        newCell.parentNode.classList.add('opened');
        Time.infoAbertas = true
        timeClicado = Time.nome;
    } 
    else 
    {
        timeClicado = " ";
    }
}
