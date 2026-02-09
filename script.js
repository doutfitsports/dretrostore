let currentCategory = "collar";

/* PRODUCTS */
const productsByCategory = {
  full: [
    {
      name: "D01:Messi Barcelona",
      images: ["images/fullsleeve/D01-01.jpg", "images/fullsleeve/D01-02.jpg"],
	  sizes: ["S","M","L","XL"] ,
	  meeshoUrl: "https://meesho.com/dark-blue-long-sleeve-fc-barcelona-lionel-messi-football-jersey/p/c7apqu?_ms=1.2"

    },
    {
      name: "D02:Ronaldo Juvantus",
      images: ["images/fullsleeve/D02-01.jpg", "images/fullsleeve/D02-02.jpg"],
sizes: ["S","M","L","XL"] ,
meeshoUrl: "https://meesho.com/long-sleeve-2019-2020-cronaldo-juventus-fc-home-jersey/p/c7b6l4?_ms=1.2"

    },
	    {
      name: "D03:Ronaldo Real Madrid",
 images: ["images/fullsleeve/D03-01.jpg", "images/fullsleeve/D03-02.jpg"]  ,
 sizes: ["S","M","L","XL"] ,
  meeshoUrl: "https://meesho.com/cronaldo-real-madrid-retrovintagelegends-full-sleeve-football-jersey/p/bujvfm?_ms=1.2"
 },
	    {
      name: "D04:Messi Barcelona",
 images: ["images/fullsleeve/D04-01.jpg", "images/fullsleeve/D04-02.jpg"] ,
sizes: ["S","M","L","XL"] ,
 meeshoUrl: "https://meesho.com/l-messi-barcelona-retrovintagelegends-full-sleeve-football-jersey/p/buifhz?_ms=1.2"
},
	    {
      name: "D05:Ronaldo Real Madrid",
 images: ["images/fullsleeve/D05-01.jpg", "images/fullsleeve/D05-02.jpg"] ,
sizes: ["S","M","L","XL"],
 meeshoUrl: "https://meesho.com/cristiano-ronaldo-real-madrid-retrovintagelegends-full-sleeve-football-jersey/p/buin7u?_ms=1.2"
 },
	     {
       name: "D06:Sergio Ramos Real Madrid",
  images: ["images/fullsleeve/D06-01.jpg", "images/fullsleeve/D06-02.jpg"]  ,
 sizes: ["S","M","L","XL"],
 meeshoUrl: "https://meesho.com/real-madrid-2019-20-sergio-ramos-away-jersey-with-long-sleeves/p/c7y2u8?_ms=1.2"

  },
	    {
      name: "D07:Ronaldo Real Madrid",
 images: ["images/fullsleeve/D07-01.jpg", "images/fullsleeve/D07-02.jpg"]   ,
sizes: ["S","M","L","XL"],
meeshoUrl: "https://meesho.com/real-madrid-cronaldo-embroidery-20172018--jersey/p/c7bnmt?_ms=1.2"

 },
	    {
      name: "D08:C.Ronaldo SPORTING",
 images: ["images/fullsleeve/D08-01.jpg", "images/fullsleeve/D08-02.jpg"]   ,
sizes: ["S","M","L","XL"],
 meeshoUrl: "https://meesho.com/cristiano-ronaldo-sporting-retrovintagelegends-full-sleeve-football-jersey/p/buekly?_ms=1.2"
 },
	     {
       name: "D09:C.Ronaldo MANCHESTER UNITED",
  images: ["images/fullsleeve/D09-01.jpg", "images/fullsleeve/D09-02.jpg"]   ,
 sizes: ["S","M","L"],
meeshoUrl: "https://meesho.com/manchester-united-2002-04-home-long-sleeve-c-ronaldo-football-jersey/p/c7yydi?_ms=1.2"
 
 },
	    {
      name: "D10:C.Ronaldo Real Madrid",
 images: ["images/fullsleeve/D10-01.jpg", "images/fullsleeve/D10-02.jpg"]   ,
sizes: ["S","M","L","XL"] ,
meeshoUrl: "https://meesho.com/cronaldo-real-madrid-dragon-edition-jersey/p/c76bnf?_ms=1.2"

},
	     {
       name: "D11:OLIVER KHAN",
  images: ["images/fullsleeve/D11-01.jpg", "images/fullsleeve/D11-02.jpg"]   ,
 sizes: ["S","M","L","XL"],
 meeshoUrl: "https://meesho.com/chelsea-fc-201112-ftorres-home-long-sleeved-football-jersey/p/c80w92?_ms=1.2"

  },
	     {
       name: "D12:ROONEY MACHESTER UNITED",
  images: ["images/fullsleeve/D12-01.jpg", "images/fullsleeve/D12-02.jpg"]   ,
sizes: ["S","M","L","XL"] ,
meeshoUrl: "https://meesho.com/2012-13-manchester-united-rooney-long-sleeve-home-football-shirt/p/c80dqa?_ms=1.2"

 },
	     {
       name: "D13:F.TORRES",
  images: ["images/fullsleeve/D13-01.jpg", "images/fullsleeve/D13-02.jpg"]   ,
 sizes: ["S","M","L","XL"],
 meeshoUrl: "https://meesho.com/bayern-munich-2004-05-goalkeeper-jersey--oliver-kahn/p/c7zyb9?_ms=1.2"

  },
	    {
      name: "D14:D.BECKHAM REAL MADRID",
 images: ["images/fullsleeve/D14-01.jpg", "images/fullsleeve/D14-02.jpg"]   ,
sizes: ["M","L","XL"] ,
meeshoUrl: "https://meesho.com/black-real-madrid-david-beckham-2006-07-long-sleeve-away-jersey/p/c7ck5v?_ms=1.2"

},
	    {
      name: "D15:ZIDANE FRANCE",
 images: ["images/fullsleeve/D15-01.jpg", "images/fullsleeve/D15-02.jpg"]   ,
sizes: ["S","M","L","XL"] ,
meeshoUrl: "https://meesho.com/2006-08-france-home-football-jersey--zinedine-long-sleeve-zidane/p/c7chht?_ms=1.2"

}

	
  ],

  half: [
    {
      name: "C01:RONALDINHO AC MILAN",
      images: ["images/halfsleeve/C01-01.jpg", "images/halfsleeve/C01-02.jpg"],
	  sizes: ["S","M","L","XL"],
	  meeshoUrl: "https://meesho.com/ac-milan-2009-10-ronaldinho-retro-half-sleeve-football-jersey/p/caprdu?_ms=1.2"

    },
	{
      name: "C02:MESSI FC BARCELONA",
      images: ["images/halfsleeve/C02-01.jpg", "images/halfsleeve/C02-02.jpg"],
	  sizes: ["S","M","L","XL"],
	  meeshoUrl: "https://meesho.com/fc-barcelona-lmessi-2016-17-home-normal-sleeve-football-retro-jersey/p/capx5n?_ms=1.2"

    },
	// {
      // name: "C03:RONALDO MANCHESTER",
      // images: ["images/halfsleeve/C03-01.jpg", "images/halfsleeve/C03-02.jpg"],
	  // sizes: ["S","M","L","XL"]
    // },
	{
      name: "C04:C.RONALDO MANCHESTER",
      images: ["images/halfsleeve/C04-02.jpg", "images/halfsleeve/C04-01.jpg"],
	  sizes: ["S","M","L","XL"],
	  meeshoUrl: "https://meesho.com/manchester-united-cronaldo-2009-2010-normal-sleeve-retro-football-jersey/p/capzrk?_ms=1.2"

    },
	{
      name: "C05:C.RONALDO REAL MADRID",
      images: ["images/halfsleeve/C05-02.jpg", "images/halfsleeve/C05-01.jpg"],
	  sizes: ["S","M","L","XL"],
	  meeshoUrl: "https://meesho.com/real-madrid-cronaldo-201415-third-kit-dragon-edition-normal-sleeve-retro-football-jersey/p/caqela?_ms=1.2"

    },
	{
      name: "C06:C.RONALDO  JUVANTUS",
     images: ["images/halfsleeve/C06-02.jpg", "images/halfsleeve/C06-01.jpg"],
	  sizes: ["S","M","L","XL"],
	  meeshoUrl: "https://meesho.com/juventus-fc-2018-19-cronaldo-normal-sleeve-retro-jersey/p/caqrsb?_ms=1.2"

    },
	{
      name: "C07:MESSI FC BARCELONA",
      images: ["images/halfsleeve/C07-02.jpg", "images/halfsleeve/C07-01.jpg"],
	  sizes: ["S","M","L","XL"],
	  meeshoUrl: "https://meesho.com/fc-barcelona-201718-lmessi-normal-sleeve-retro-football-jersey/p/caqz8a?_ms=1.2"

    },
	// {
      // name: "C08:LAMINE YAMAL BARCELONA",
     // images: ["images/halfsleeve/C08-02.jpg", "images/halfsleeve/C08-01.jpg"],
	  // sizes: ["S","M","L","XL"]
    // },
	// {
      // name: "C09:LAMINE YAMAL BARCELONA",
     // images: ["images/halfsleeve/C09-02.jpg", "images/halfsleeve/C09-01.jpg"],
	  // sizes: ["S","M","L","XL"]
    // },
	// {
      // name: "C10:MBAPPE REAL MADRID",
     // images: ["images/halfsleeve/C10-02.jpg", "images/halfsleeve/C10-01.jpg"],
	  // sizes: ["S","M","L","XL"]
    // },
	// {
      // name: "C11:MBAPPE REAL MADRID",
      // images: ["images/halfsleeve/C11-02.jpg", "images/halfsleeve/C11-01.jpg"],
	  // sizes: ["S","M","L","XL"]
    // },
	{
      name: "C12:C.RONALDO SPORTING",
      images: ["images/halfsleeve/C12-02.jpg", "images/halfsleeve/C12-01.jpg"],
	  sizes: ["S","M","L","XL"],
	  meeshoUrl: "https://meesho.com/2001-03-sporting-cronaldo-normal-sleeve-retro-jersey/p/car2xj?_ms=1.2"

    },
	{
      name: "C13:BECKHAM ENGLAND",
      images: ["images/halfsleeve/C13-02.jpg", "images/halfsleeve/C13-01.jpg"],
	  sizes: ["S","M","L","XL"],
	  meeshoUrl: "https://meesho.com/david-beckham-england-2004-06-mens-away-normal-sleeve-retro-football-jersey/p/carax3?_ms=1.2"

    },
	{
      name: "C14:R.CARLOS REAL MADRID",
      images: ["images/halfsleeve/C14-02.jpg", "images/halfsleeve/C14-01.jpg"],
	  sizes: ["S","M","L","XL"],
	  meeshoUrl: "https://meesho.com/real-madrid-rcarlos-200405-away-normal-sleeve-retro--jersey/p/carcyn?_ms=1.2"

    }
	// ,
	// {
      // name: "C15:C.RONALDO MANCHESTER",
     // images: ["images/halfsleeve/C15-02.jpg", "images/halfsleeve/C15-01.jpg"],
	  // sizes: ["S","M","L","XL"],
	  // meeshoUrl: "https://meesho.com/manchester-united-cronaldo-2008-2009-normal-sleeve-retro-football-jersey/p/cardp7?_ms=1.2"

    // },
	// {
      // name: "C16:GERRARD LIVERPOOL FC",
      // images: ["images/halfsleeve/C16-02.jpg", "images/halfsleeve/C16-01.jpg"],
	  // sizes: ["S","M","L","XL"]
    // },
	// {
      // name: "C17:MESSI FC BARCELONA",
     // images: ["images/halfsleeve/C17-02.jpg", "images/halfsleeve/C17-01.jpg"],
	  // sizes: ["S","M","L","XL"]
    // },
	// {
      // name: "C18:C.RONALDO SPORTING",
    // images: ["images/halfsleeve/C18-02.jpg", "images/halfsleeve/C18-01.jpg"],
	  // sizes: ["S","M","L","XL"]
    // },
	// {
      // name: "C19:MALDINI ENGLAND",
     // images: ["images/halfsleeve/C19-02.jpg", "images/halfsleeve/C19-01.jpg"],
	  // sizes: ["S","M","L","XL"]
    // },
	// {
      // name: "C20:C.RONALDO  JUVANTUS",
     // images: ["images/halfsleeve/C20-02.jpg", "images/halfsleeve/C20-01.jpg"],
	  // sizes: ["S","M","L","XL"]
    // },
	// {
      // name: "C21:BECKHAM MANCHESTER",
     // images: ["images/halfsleeve/C21-02.jpg", "images/halfsleeve/C21-01.jpg"],
	  // sizes: ["S","M","L","XL"]
    // },
	// {
      // name: "C22:MESSI FC BARCELONA",
     // images: ["images/halfsleeve/C22-02.jpg", "images/halfsleeve/C22-01.jpg"],
	  // sizes: ["S","M","L","XL"]
    // },
	// {
      // name: "C23:C.RONALDO MACHESTER",
      // images: ["images/halfsleeve/C23-02.jpg", "images/halfsleeve/C23-01.jpg"],
	  // sizes: ["S","M","L","XL"]
    // },
	// {
      // name: "C24:C.RONALDO PORTUGAL",
     // images: ["images/halfsleeve/C24-02.jpg", "images/halfsleeve/C24-01.jpg"],
	  // sizes: ["S","M","L","XL"]
    // },
	// {
      // name: "C25:CASILLAS READL MADRID GK",
     // images: ["images/halfsleeve/C25-02.jpg", "images/halfsleeve/C25-01.jpg"],
	  // sizes: ["S","M","L","XL"]
    // },
	// {
      // name: "C26:NEYMER SANTOS",
     // images: ["images/halfsleeve/C26-02.jpg", "images/halfsleeve/C26-01.jpg"],
	  // sizes: ["S","M","L","XL"]
    // }
  ],

  collar: [
    {
      name: "A01:ZIDAN REAL MADRID",
      images: ["images/collarNorFsleeve/A01-01.jpg", "images/collarNorFsleeve/A01-02.jpg", "images/collarNorFsleeve/A01-03.jpg"],
	  sizes: ["S","M","L","XL"],
meeshoUrl: "https://meesho.com/zidane-real-madrid-retrovintagelegends-five-sleeve-collar-football-jersey/p/buuzer?_ms=1.2"

    },
	  {
      name: "A02:BECKHAM ENGLAND",
      images: ["images/collarNorFsleeve/A02-01.jpg", "images/collarNorFsleeve/A02-02.jpg", "images/collarNorFsleeve/A02-03.jpg"],
	  sizes: ["S","M","L","XL"],
meeshoUrl: "https://meesho.com/beckham-england-retrovintagelegends-five-sleeve-collar-football-jersey/p/buzanc?_ms=1.2"

    },
	  {
      name: "A03:BECKHAM ENGLAND",
      images: ["images/collarNorFsleeve/A03-01.jpg", "images/collarNorFsleeve/A03-02.jpg", "images/collarNorFsleeve/A03-03.jpg"],
	  sizes: ["S","M","L","XL"],
meeshoUrl: "https://meesho.com/david-beckham-england-retrovintagelegends-five-sleeve-collar-football-jersey/p/buv93h?_ms=1.2"

    },
	   {
       name: "A04:R.CARLOS INTER MILAN",
       images: ["images/collarNorFsleeve/A04-01.jpg", "images/collarNorFsleeve/A04-02.jpg", "images/collarNorFsleeve/A04-03.jpg"],
	   sizes: ["S","M","L","XL"],
  meeshoUrl: "https://meesho.com/zidane-france-retrovintagelegends-full-sleeve-football-jersey/p/bueo6z?_ms=1.2"
     },
	  {
      name: "A05:ZIDANE FRANCE",
      images: ["images/collarNorFsleeve/A05-01.jpg", "images/collarNorFsleeve/A05-02.jpg", "images/collarNorFsleeve/A05-03.jpg"],
	  sizes: ["S","M","L","XL"],
meeshoUrl: "https://meesho.com/zidane--france-retrovintagelegends-five-sleeve-collar-football-jersey/p/buv4nr?_ms=1.2"


    },
	   {
       name: "A06:BUFFON PARMA FC",
       images: ["images/collarNorFsleeve/A06-01.jpg", "images/collarNorFsleeve/A06-02.jpg", "images/collarNorFsleeve/A06-03.jpg"],
	   sizes: ["S","M","L","XL"],
meeshoUrl: "https://meesho.com/vintage-champion-parma-fc-2000-01-buffon-goalkeeper-football-jersey/p/c8231n?_ms=1.2"

     },
	  {
      name: "A07:MARADONA BOCA JUNIORS",
      images: ["images/collarNorFsleeve/A07-01.jpg", "images/collarNorFsleeve/A07-02.jpg", "images/collarNorFsleeve/A07-03.jpg"],
	  sizes: ["S","M","L","XL"],
meeshoUrl: "https://meesho.com/maradona-boca-juniors-retrovintagelegends-five-sleeve-collar-football-jersey/p/buyee5?_ms=1.2"

    },
	  {
      name: "A08:RONALDO BRAZIL",
      images: ["images/collarNorFsleeve/A08-01.jpg", "images/collarNorFsleeve/A08-02.jpg","images/collarNorFsleeve/A08-03.jpg"],
	  sizes: ["S","M","L","XL"],
meeshoUrl: "https://meesho.com/ronaldo-brazil-retrovintagelegends-five-sleeve-collar-football-jersey/p/buwkbj?_ms=1.2"

    },
	
	  {
      name: "A10:CRUYFF AJAX",
      images: ["images/collarNorFsleeve/A10-01.jpg", "images/collarNorFsleeve/A10-02.jpg","images/collarNorFsleeve/A10-03.jpg"],
	  sizes: ["S","M","L","XL"],
meeshoUrl: "https://meesho.com/cruyff-retrovintagelegends-collar-five-sleeve-football-jersey/p/bvz8cb?_ms=1.2"

    },
	  {
      name: "A11:MALDINI ITALY",
      images: ["images/collarNorFsleeve/A11-01.jpg", "images/collarNorFsleeve/A11-02.jpg","images/collarNorFsleeve/A11-03.jpg"],
	  sizes: ["S","M","L","XL"],
meeshoUrl: "https://meesho.com/italy-maldini-gucci-special-edition--football-five-sleeve-jersey-with-a-collar/p/c82irp?_ms=1.2"

    },
	  {
      name: "A12:BALLACK GERMANY",
      images: ["images/collarNorFsleeve/A12-01.jpg", "images/collarNorFsleeve/A12-02.jpg","images/collarNorFsleeve/A12-03.jpg"],
	  sizes: ["S","M","L","XL"],
meeshoUrl: "https://meesho.com/ballack-germany-retrovintagelegends-five-sleeve-collar-football-jersey/p/buz2mt?_ms=1.2"

    },
	  {
      name: "A13:ZIDANE FRANCE",
      images: ["images/collarNorFsleeve/A13-01.jpg", "images/collarNorFsleeve/A13-02.jpg"],
	  sizes: ["S","M","L","XL"],
meeshoUrl: "https://meesho.com/zidane-france-retrovintagelegends-collar-five-sleeve-football-jersey/p/bvzqxn?_ms=1.2"

    },
	  {
      name: "A14:F.TORRES",
      images: ["images/collarNorFsleeve/A14-01.jpg", "images/collarNorFsleeve/A14-02.jpg"],
	  sizes: ["S","M","L","XL"],
meeshoUrl: "https://meesho.com/ftorres-atltico-madrid-home-five-sleeve-collar-football-jersey/p/c8359c?_ms=1.2"

    },
	  {
      name: "A15:R.CARLOS",
      images: ["images/collarNorFsleeve/A15-01.jpg", "images/collarNorFsleeve/A15-02.jpg"],
	  sizes: ["S","M","L","XL"],
meeshoUrl: "https://meesho.com/r-carlos-real-madrid-1998-99-away-collar-five-sleeve-soccer-jersey/p/c839vr?_ms=1.2"

    },
	  {
      name: "A16:ZIDANE",
      images: ["images/collarNorFsleeve/A16-01.jpg", "images/collarNorFsleeve/A16-02.jpg"],
	  sizes: ["S","M","L","XL"],
meeshoUrl: "https://meesho.com/zidane-france-retrovintagelegends-collar-five-sleeve-football-jersey/p/bvzo3o?_ms=1.2"

    },
	  {
      name: "A17:BECKHAM",
      images: ["images/collarNorFsleeve/A17-01.jpg", "images/collarNorFsleeve/A17-02.jpg"],
	  sizes: ["S","M","L","XL"],
	  meeshoUrl: "https://meesho.com/beckham-manchester-united-1998-1999-home-normal-collar-sleeve-football-jersey/p/c83yu9?_ms=1.2"

    },
	  {
      name: "A18:MALDINI",
      images: ["images/collarNorFsleeve/A18-01.jpg", "images/collarNorFsleeve/A18-02.jpg"],
	  sizes: ["S","M","L","XL"],
	  meeshoUrl: "https://meesho.com/maldini-ac-milan-premium-retrovintagelegends-collar-five-sleeve-football-jersey/p/bvzxx0?_ms=1.2"

    },
	  // {
      // name: "A19:RONALDO",
      // images: ["images/collarNorFsleeve/A19-01.jpg", "images/collarNorFsleeve/A19-02.jpg"],
	  // sizes: ["S","M","L","XL"]
    // },
	  // {
      // name: "A20:MULLER",
      // images: ["images/collarNorFsleeve/A20-01.jpg", "images/collarNorFsleeve/A20-02.jpg"],
	  // sizes: ["S","M","L","XL"]
    // },
	  {
      name: "A21:BECKHAM ENGLAND",
      images: ["images/collarNorFsleeve/A21-01.jpg", "images/collarNorFsleeve/A22-02.jpg"],
	  sizes: ["S","M","L","XL"],
	  meeshoUrl: "https://meesho.com/david-beckham-manchester-united-retrovintagelegends-five-sleeve-collar-football-jersey/p/buva3p?_ms=1.2"

    },
	  // {
      // name: "A22:MALDINI",
      // images: ["images/collarNorFsleeve/A22-01.jpg", "images/collarNorFsleeve/A22-02.jpg"],
	  // sizes: ["S","M","L","XL"],
	  // meeshoUrl: "https://meesho.com/maldini-italy-retrovintagelegends-five-sleeve-collar-football-jersey/p/buz7tb?_ms=1.2"

    // },
	  // {
      // name: "A23:F.TORRES",
      // images: ["images/collarNorFsleeve/A23-01.jpg", "images/collarNorFsleeve/A23-02.jpg"],
	  // sizes: ["S","M","L","XL"]
    // },
	 {
      name: "A24:C. RONALDO PORTUGAL",
      images: ["images/collarNorFsleeve/A24-01.jpg", "images/collarNorFsleeve/A24-02.jpg"],
	  sizes: ["S","M","L","XL"],
	  meeshoUrl: "https://meesho.com/cronaldo-portugal-vintage-football-jersey/p/c8kbri?_ms=1.2"

    },
	  {
      name: "A25:LAMPARD CHELSEA",
      images: ["images/collarNorFsleeve/A25-01.jpg", "images/collarNorFsleeve/A25-02.jpg"],
	  sizes: ["S","M","L","XL"],
	  meeshoUrl: "https://meesho.com/frank-lampard-chelsea-2011-12-collar-jersey/p/c8jdga?_ms=1.2"

    },
	  {
      name: "A26:KAKA AC MILAN",
      images: ["images/collarNorFsleeve/A26-01.jpg", "images/collarNorFsleeve/A26-02.jpg"],
	  sizes: ["S","M","L","XL"],
	  meeshoUrl: "https://meesho.com/kaka-retrovintagelegends-normal-sleeve-collar-football-jersey/p/buyacp?_ms=1.2"

    },
	  {
      name: "A27:MARADONA ARGENTINA",
      images: ["images/collarNorFsleeve/A27-01.jpg", "images/collarNorFsleeve/A27-02.jpg"],
	  sizes: ["S","M","L","XL"],
	  meeshoUrl: "https://meesho.com/maradona--retrovintagelegends-normal-sleeve-collar-football-jersey/p/buyk6h?_ms=1.2"

    },
	  // {
      // name: "A28:RONALDINHO BARCELONA",
      // images: ["images/collarNorFsleeve/A28-01.jpg", "images/collarNorFsleeve/A28-02.jpg"],
	  // sizes: ["S","M","L","XL"]
    // },
	  {
      name: "A29:ZIDAN FRANCE",
      images: ["images/collarNorFsleeve/A29-01.jpg", "images/collarNorFsleeve/A29-02.jpg"],
	  sizes: ["S","M","L","XL"],
	  meeshoUrl: "https://meesho.com/zidane-retrovintagelegends-collar-normal-sleeve-football-jersey/p/bw3hhx?_ms=1.2"

    },
	  {
      name: "A30:BECKHAM ENGLAND",
      images: ["images/collarNorFsleeve/A30-01.jpg", "images/collarNorFsleeve/A30-02.jpg"],
	  sizes: ["S","M","L","XL"],
	  meeshoUrl: "https://meesho.com/manchester-united-2000-01-third-kit-football---beckham-7/p/c8jegw?_ms=1.2"

    },
	  {
      name: "A31:OWEN NEW CASTLE",
      images: ["images/collarNorFsleeve/A31-01.jpg", "images/collarNorFsleeve/A31-02.jpg"],
	  sizes: ["S","M","L","XL"],
meeshoUrl: "https://meesho.com/newcastle-united-mowen-2007-08-home-football-jersey/p/c7dtdi?_ms=1.2"


    },
	  {
      name: "A32:BECKHAM MANCHESTER UNITED",
      images: ["images/collarNorFsleeve/A32-01.jpg", "images/collarNorFsleeve/A32-02.jpg"],
	  sizes: ["S","M","L","XL"],
	  meeshoUrl: "https://meesho.com/beckham-manchester-united-premium-retrovintagelegends-collar-normal-sleeve-football-jersey/p/bvzzub?_ms=1.2"

    },
	  {
      name: "A33:BECKHAM MANCHESTER UNITED",
      images: ["images/collarNorFsleeve/A33-01.jpg", "images/collarNorFsleeve/A33-02.jpg"],
	  sizes: ["S","M","L","XL"],
	  meeshoUrl: "https://meesho.com/beckham-manchester-united-retrovintagelegends-collar-normal-sleeve-football-jersey/p/bvzk4i?_ms=1.2"

    },
	  {
      name: "A34:C. RONALDO BLACK PANTHER PORTUGAL",
      images: ["images/collarNorFsleeve/A34-01.jpg", "images/collarNorFsleeve/A34-02.jpg"],
	  sizes: ["S","M","L","XL"],
	  meeshoUrl: "https://meesho.com/cronaldo-portugal-special-edition-retrovintagelegends-collar-embroidery-five-sleeve-football-jersey/p/bvzi2t?_ms=1.2"

    },
	  {
      name: "A35:KROOS GERMANY",
      images: ["images/collarNorFsleeve/A35-01.jpg", "images/collarNorFsleeve/A35-02.jpg"],
	  sizes: ["S","M","L","XL"],
	  meeshoUrl: "https://meesho.com/kroos-germany-2010-world-cup-away-collar-five-sleeve-football-jersey/p/c8jexi?_ms=1.2"

    },
	  {
      name: "A36:F.BECKENBAUER GERMANY 1996",
      images: ["images/collarNorFsleeve/A36-01.jpg", "images/collarNorFsleeve/A36-02.jpg"],
	  sizes: ["S","M","L","XL"],
meeshoUrl: "https://meesho.com/beckenbauer-germany-retro-legends-vintage-five-sleeve-football-jersey/p/btnx7h?_ms=1.2"


    },
	  {
      name: "A37:M.OWEN LIVERPOOL 93-95",
      images: ["images/collarNorFsleeve/A37-01.jpg", "images/collarNorFsleeve/A37-02.jpg"],
	  sizes: ["S","M","L","XL"],
	  meeshoUrl: "https://meesho.com/1995-96-liverpool-fc-mowen-collar-five-sleeve-jersey/p/c8jfcm?_ms=1.2"

    },
	  {
      name: "A38:L.MESSI Barcelona 1999-2000",
      images: ["images/collarNorFsleeve/A38-01.jpg", "images/collarNorFsleeve/A38-02.jpg"],
	  sizes: ["S","M","L","XL"],
	  meeshoUrl: "https://meesho.com/l-messi-barcelona-retrovintagelegends-five-sleeve-collar-football-jersey/p/buwbw2?_ms=1.2"

    },
	  {
      name: "A39:Batistuta",
      images: ["images/collarNorFsleeve/A39-01.jpg", "images/collarNorFsleeve/A39-02.jpg"],
	  sizes: ["S","M","L","XL"],
	  meeshoUrl: "https://meesho.com/batistuta-argentina-retrovintagelegends-collar-five-sleeve-football-jersey/p/bzsrtx?_ms=1.2"

    }
  ],

  five: [
    // {
      // name: "B01:RONALDINHO PSG",
      // images: ["images/fivesleeve/B01-01.jpg", "images/fivesleeve/B01-02.jpg"],
	  // sizes: ["S","M","L","XL"],
// meeshoUrl: "https://meesho.com/ronaldinho-retrovintagelegends-five-sleeve-football-jersey/p/buntis?_ms=1.2"

    // },
	    // {
      // name: "B02:RIVALDO FC BARCELONA",
      // images: ["images/fivesleeve/B02-01.jpg", "images/fivesleeve/B02-02.jpg"],
	  // sizes: ["S","M","L","XL"],
 //meeshoUrl: "https://meesho.com/zidane-france-retrovintagelegends-full-sleeve-football-jersey/p/bueo6z?_ms=1.2"
    // },
	    {
      name: "B03:IBRAHIMOVIC",
      images: ["images/fivesleeve/B03-01.jpg", "images/fivesleeve/B03-02.jpg"],
	  sizes: ["S","M","L","XL"],
meeshoUrl: "https://meesho.com/ibrahmovic-sweden-five-sleeve-retro-football-jersey/p/c8jh3l?_ms=1.2"

    },
	    {
      name: "B04:IBRAHIMOVIC",
      images: ["images/fivesleeve/B04-01.jpg", "images/fivesleeve/B04-02.jpg"],
	  sizes: ["S","M","L","XL"],
meeshoUrl: "https://meesho.com/juventus-2004-05-ibrahmovic-five-sleeve-retro-jersey/p/c8jhln?_ms=1.2"

    },
	    {
      name: "B05:MESSI",
      images: ["images/fivesleeve/B05-01.jpg", "images/fivesleeve/B05-02.jpg"],
	  sizes: ["S","M","L","XL"],
meeshoUrl: "https://meesho.com/fc-barcelona-home-jersey-lmessi2024-25/p/c7m0ne?_ms=1.2"



    },
	     {
       name: "B06:BALLACK GERMANY",
       images: ["images/fivesleeve/B06-01.jpg", "images/fivesleeve/B06-02.jpg"],
	   sizes: ["S","M","L","XL"],
meeshoUrl: "https://meesho.com/germany-2006-world-cup-away-football-jersey-with-michael-ballack/p/c7ldz0?_ms=1.2"


     },
	    {
      name: "B07:GERMANY RETRO",
      images: ["images/fivesleeve/B07-01.jpg", "images/fivesleeve/B07-02.jpg"],
	  sizes: ["S","M","L","XL"],
meeshoUrl: "https://meesho.com/germany-premium-retrovintagelegends-five-sleeve-football-jersey/p/bup3rf?_ms=1.2"

    },
	    {
      name: "B08:BECKENBAUER GERMANY",
      images: ["images/fivesleeve/B08-01.jpg", "images/fivesleeve/B08-02.jpg"],
	  sizes: ["S","M","L","XL"],
	  meeshoUrl: "https://meesho.com/beckenbauer-germany-retrovintagelegends-five-sleeve-football-jersey/p/buos98?_ms=1.2"

    },
	{
      name: "B09:C.RONALDO PORTUGAL",
      images: ["images/fivesleeve/B09-01.jpg", "images/fivesleeve/B09-02.jpg"],
	  sizes: ["S","M","L","XL"],
meeshoUrl: "https://meesho.com/portugal-cronaldo-2012-away-football-jersey/p/c7mxtl?_ms=1.2"


    },
	    {
      name: "B10:F.TORRES LIVERPOOL",
      images: ["images/fivesleeve/B10-01.jpg", "images/fivesleeve/B10-02.jpg"],
	  sizes: ["S","M","L","XL"],
	  meeshoUrl: "https://meesho.com/torres-liverpool-fc-2007-08-five-sleeve-retro-away-jersey/p/c8jhxn?_ms=1.2"

    },
	    {
      name: "B11:MALDINI AC MILAN",
      images: ["images/fivesleeve/B11-01.jpg", "images/fivesleeve/B11-02.jpg"],
	  sizes: ["S","M","L","XL"],
	  meeshoUrl: "https://meesho.com/maldini-ac-milan-retrovintagelegends-five-sleeve-football-jersey/p/buo8ms?_ms=1.2"

    },
	    {
      name: "B12:SERGIO RAMOS REAL MADRID",
      images: ["images/fivesleeve/B12-01.jpg", "images/fivesleeve/B12-02.jpg"],
	  sizes: ["S","M","L","XL"],
	  meeshoUrl: "https://meesho.com/sramos-real-madrid-200708-five-sleeve-home-football-jersey/p/c8jibv?_ms=1.2"

    },
	    {
      name: "B13:MALDINI AC MILAN",
      images: ["images/fivesleeve/B13-01.jpg", "images/fivesleeve/B13-02.jpg"],
	  sizes: ["S","M","L","XL"],
	  meeshoUrl: "https://meesho.com/maldini-ac-milan-retrovintagelegends-five-sleeve-football-jersey/p/bukla3?_ms=1.2"

    },
	    {
      name: "B14:MESSI BARCELONA",
      images: ["images/fivesleeve/B14-01.jpg", "images/fivesleeve/B14-02.jpg"],
	  sizes: ["S","M","L","XL"],
	  meeshoUrl: "https://meesho.com/lionel-messi-retrovintagelegends-five-sleeve-football-jersey/p/bulncp?_ms=1.2"

    },
	    {
      name: "B15:KROOS GERMANY",
      images: ["images/fivesleeve/B15-01.jpg", "images/fivesleeve/B15-02.jpg"],
	  sizes: ["S","M","L","XL"],
	  meeshoUrl: "https://meesho.com/kroos-germany-1996-away-retro-five-sleeve-football-jersey/p/c8jj9e?_ms=1.2"

    },
	    {
      name: "B16:MESSI ARGENTINA",
      images: ["images/fivesleeve/B16-01.jpg", "images/fivesleeve/B16-02.jpg"],
	  sizes: ["S","M","L","XL"],
	  meeshoUrl: "https://meesho.com/messi-argentina-retrovintagelegends-five-sleeve-football-jersey/p/bup5yj?_ms=1.2"

    },
	{
      name: "B17:V.PERSIE MANCHESTER UNITED",
      images: ["images/fivesleeve/B17-01.jpg", "images/fivesleeve/B17-02.jpg"],
	  sizes: ["S","M","L","XL"],
	  meeshoUrl: "https://meesho.com/vpersie-manchester-united-2012-13-home-five-sleeve-retro-jersey/p/c8jlob?_ms=1.2"

    },
	    {
      name: "B18:BALLACK GERMANY",
      images: ["images/fivesleeve/B18-01.jpg", "images/fivesleeve/B18-02.jpg"],
	  sizes: ["S","M","L","XL"],
	  meeshoUrl: "https://meesho.com/ballack-germany-retrovintagelegends-five-sleeve-football-jersey/p/bukbzh?_ms=1.2"

    },
	    {
      name: "B19:ROONEY MANCHESTER UNITED",
      images: ["images/fivesleeve/B19-01.jpg", "images/fivesleeve/B19-02.jpg"],
	  sizes: ["S","M","L","XL"],
	  meeshoUrl: "https://meesho.com/rooney-manchester-united-retrovintagelegends-five-sleeve-football-jersey/p/bup0wy?_ms=1.2"

    },
	    {
      name: "B20:MALDINI AC MILAN",
      images: ["images/fivesleeve/B20-01.jpg", "images/fivesleeve/B20-02.jpg"],
	  sizes: ["S","M","L","XL"],
	  meeshoUrl: "https://meesho.com/maldini-ac-milan-retrovintagelegends-five-sleeve-football-jersey/p/buo7tv?_ms=1.2"

    },
	    {
      name: "B21:MESSI ARGENTINA",
      images: ["images/fivesleeve/B21-01.jpg", "images/fivesleeve/B21-02.jpg"],
	  sizes: ["S","M","L","XL"],
meeshoUrl: "https://meesho.com/argentina-2006-home-football-jersey-with-lionel-messis--19/p/c7n6i5?_ms=1.2"



    },
	    {
      name: "B22:BECKHAM REAL MADRID",
      images: ["images/fivesleeve/B22-01.jpg", "images/fivesleeve/B22-02.jpg"],
	  sizes: ["S","M","L","XL"],
	  meeshoUrl: "https://meesho.com/david-beckham-real-madrid-retrovintagelegends-five-sleeve-football-jersey/p/bul1di?_ms=1.2"

    },
	    {
      name: "B23:GERRARD LIVERPOOL",
      images: ["images/fivesleeve/B23-01.jpg", "images/fivesleeve/B23-02.jpg"],
	  sizes: ["S","M","L","XL"],
	  meeshoUrl: "https://meesho.com/liverpool-fc-2006-07-gerrard-five-retro-jersey/p/c8jlyn?_ms=1.2"

    },
	    {
      name: "B24:C.RONALDO REAL MADRID",
      images: ["images/fivesleeve/B24-01.jpg", "images/fivesleeve/B24-02.jpg"],
	  sizes: ["S","M","L","XL"],
	  meeshoUrl: "https://meesho.com/real-madrid-2011-12-ronaldo-five-sleeve-retro-away-jersey/p/c8jm8h?_ms=1.2"

    },
	{
      name: "B25:C.RONALDO REAL MADRID",
      images: ["images/fivesleeve/B25-01.jpg", "images/fivesleeve/B25-02.jpg"],
	  sizes: ["S","M","L","XL"],
	  meeshoUrl: "https://meesho.com/cronaldo-manchester-united-retrovintagelegends-five-sleeve-football-jersey/p/buo40e?_ms=1.2"

    },
	    {
      name: "B26:BECKHAM ENGLAND",
      images: ["images/fivesleeve/B26-01.jpg", "images/fivesleeve/B26-02.jpg"],
	  sizes: ["S","M","L","XL"],
	  meeshoUrl: "https://meesho.com/manchester-united-2000-2001-beckahm-retro-legends-football-jersey/p/c8jmfh?_ms=1.2"

    },
	    {
      name: "B27:ROONEY MANCHESTER UNITED",
      images: ["images/fivesleeve/B27-01.jpg", "images/fivesleeve/B27-02.jpg"],
	  sizes: ["S","M","L","XL"],
	  meeshoUrl: "https://meesho.com/rooney-manchester-united-retrovintagelegends-five-sleeve-football-jersey/p/buurxr?_ms=1.2"

    },
	    // {
      // name: "B28:MESSI ARGENTINA",
      // images: ["images/fivesleeve/B28-01.jpg", "images/fivesleeve/B28-02.jpg"],
	  // sizes: ["S","M","L","XL"]
    // },
	    // {
      // name: "B29:GATTUSO AC MILAN",
      // images: ["images/fivesleeve/B29-01.jpg", "images/fivesleeve/B29-02.jpg"],
	  // sizes: ["S","M","L","XL"]
    // },
	    {
      name: "B30:MESSI BARCELONA",
      images: ["images/fivesleeve/B30-01.jpg", "images/fivesleeve/B30-02.jpg"],
	  sizes: ["S","M","L","XL"],
	  meeshoUrl: "https://meesho.com/fc-barcelona-lmessi-2008-09-home-reteo-jersey/p/c8jmzk?_ms=1.2"

    },
	    {
      name: "B31:C.RONALDO SPORTING",
      images: ["images/fivesleeve/B31-01.jpg", "images/fivesleeve/B31-02.jpg"],
	  sizes: ["S","M","L","XL"],
	  meeshoUrl: "https://meesho.com/c-ronaldo-sporting-retrovintagelegends-five-sleeve-football-jersey/p/buummy?_ms=1.2"

    },
	    {
      name: "B32:MALDINI AC MILAN",
      images: ["images/fivesleeve/B32-01.jpg", "images/fivesleeve/B32-02.jpg"],
	  sizes: ["S","M","L","XL"],
meeshoUrl: "https://meesho.com/ac-milan-200809-maldini-retro-five-sleeve-jersey/p/c8jn5m?_ms=1.2"


    },
	{
      name: "B33:MATTHAUS BAYERN MUNIC",
      images: ["images/fivesleeve/B33-01.jpg", "images/fivesleeve/B33-02.jpg"],
	  sizes: ["S","M","L","XL"],
	  meeshoUrl: "https://meesho.com/matthaus-bayern-munich-1993-95-retro-vintage-five-sleeve-jersey/p/c8jnax?_ms=1.2"

    },
	{
      name: "A34:ZIDANE Juvantus",
      images: ["images/fivesleeve/B34-01.jpg", "images/fivesleeve/B34-02.jpg"],
	  sizes: ["S","M","L","XL"],
	  meeshoUrl: "https://meesho.com/zidane-juventus-retrovintagelegends-five-sleeve-football-jersey/p/bzsm8p?_ms=1.2"

    },
	{
      name: "A35:RONALDO MANCHESTER UNITED",
      images: ["images/fivesleeve/B35-01.jpg", "images/fivesleeve/B35-02.jpg", "images/fivesleeve/B35-03.jpg"],
	  sizes: ["S","M","L","XL"],
	  meeshoUrl: "https://meesho.com/cronaldo-manchester-united-retrovintagelegends-five-sleeve-football-jersey/p/bvzboh?_ms=1.2"

    }
	
  ]
};

function renderCategory(categoryKey) {
	currentCategory = categoryKey;
  const container = document.getElementById("products");
  container.innerHTML = "";

  const products = [...productsByCategory[categoryKey]].reverse();

  products.forEach(p => {
    const sizes = p.sizes && p.sizes.length ? p.sizes : DEFAULT_SIZES;

    const sizeOptions = sizes
      .map(s => `<option value="${s}">${s}</option>`)
      .join("");

    container.innerHTML += `
      <div class="card">
        <div class="slider" data-index="0" data-images='${JSON.stringify(p.images)}'>
          <img src="${p.images[0]}" onclick="openImageZoom(this.src)">
          <button class="arrow left" onclick="slide(this,-1)">❮</button>
          <button class="arrow right" onclick="slide(this,1)">❯</button>
        </div>

        <h4>${p.name}</h4>
<a href="${p.meeshoUrl}" 
   target="_blank" 
   class="buy-btn">
   🛒 Buy Now
</a>
       
      </div>
    `;
  });
}

/***********************
 * IMAGE SLIDER
 ***********************/
function slide(btn, dir) {
  const slider = btn.parentElement;
  const images = JSON.parse(slider.dataset.images);
  let index = parseInt(slider.dataset.index);

  index += dir;
  if (index < 0) index = images.length - 1;
  if (index >= images.length) index = 0;

  slider.dataset.index = index;
  slider.querySelector("img").src = images[index];
}

/***********************
 * IMAGE ZOOM MODAL
 ***********************/
function openImageZoom(src) {
  document.getElementById("zoomedImage").src = src;
  document.getElementById("imageZoomModal").style.display = "flex";
}

function closeImageZoom() {
  document.getElementById("imageZoomModal").style.display = "none";
}

document.getElementById("imageZoomModal").addEventListener("click", e => {
  if (e.target.id === "imageZoomModal") closeImageZoom();
});

/***********************
 * TABS
 ***********************/
document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
		  document.getElementById("searchInput").value = "";

    renderCategory(tab.dataset.category);
  });
});





/***********************
 * WHATSAPP CHECKOUT
 ***********************/


/***********************
 * INIT
 ***********************/
renderCategory("five");

window.onload = function () {
  document.getElementById("sizeChartModal").style.display = "none";
};

// Show info modal on page load (once)
window.addEventListener("load", () => {
  if (!localStorage.getItem("infoSeen")) {
    document.getElementById("infoModal").style.display = "flex";
  }
});

function closeInfoModal() {
  document.getElementById("infoModal").style.display = "none";
  localStorage.setItem("infoSeen", "yes");
}
function openSizeChart() {
  document.getElementById("sizeChartModal").style.display = "flex";
}

function closeSizeChart() {
  document.getElementById("sizeChartModal").style.display = "none";
}

/* Close when clicking outside */
document.getElementById("sizeChartModal").addEventListener("click", function(e){
  if(e.target.id === "sizeChartModal"){
    closeSizeChart();
  }
});

function searchProducts() {
  const keyword = document.getElementById("searchInput").value.toLowerCase();
  const container = document.getElementById("products");
  container.innerHTML = "";

  const products = productsByCategory[currentCategory];

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(keyword)
  ).reverse();

  if (filtered.length === 0) {
    container.innerHTML = `<p style="text-align:center;">❌ No jerseys found</p>`;
    return;
  }

  filtered.forEach(p => renderProductCard(p, currentCategory));
}
function renderProductCard(p, categoryKey) {
  const container = document.getElementById("products");

  const sizeOptions = p.sizes
    .map(s => `<option value="${s}">${s}</option>`)
    .join("");

  container.innerHTML += `
    <div class="card">
      <div class="slider" data-index="0" data-images='${JSON.stringify(p.images)}'>
        <img src="${p.images[0]}" onclick="openImageZoom(this.src)">
        <button class="arrow left" onclick="slide(this,-1)">❮</button>
        <button class="arrow right" onclick="slide(this,1)">❯</button>
      </div>

      <h4>${p.name}</h4>
      <p>${categoryKey.toUpperCase()}</p>

      <select class="size-select">
        ${sizeOptions}
      </select>

      <button onclick="addToCart(
        '${p.name}',
        '${categoryKey}',
        this.previousElementSibling.value
      )">Add to Cart</button>
    </div>
  `;
}
