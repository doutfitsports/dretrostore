let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* PRODUCTS */
const productsByCategory = {
  full: [
    {
      name: "D01:Messi Barcelona",
      images: ["images/fullsleeve/D01-01.jpg", "images/fullsleeve/D01-02.jpg"],
	  sizes: ["S","M","L","XL","XXL"]
    },
    {
      name: "D02:Ronaldo Juvantus",
      images: ["images/fullsleeve/D02-01.jpg", "images/fullsleeve/D02-02.jpg"],
	  sizes: ["S","M","L","XL","XXL"]
    },
	    {
      name: "D03:Ronaldo Real Madrid",
 images: ["images/fullsleeve/D03-01.jpg", "images/fullsleeve/D03-02.jpg"]  ,
sizes: ["S","M","L","XL","XXL"] },
	    {
      name: "D04:Messi Barcelona",
 images: ["images/fullsleeve/D04-01.jpg", "images/fullsleeve/D04-02.jpg"] ,
sizes: ["S","M","L","XL","XXL"] },
	    {
      name: "D05:Ronaldo Real Madrid",
 images: ["images/fullsleeve/D05-01.jpg", "images/fullsleeve/D05-02.jpg"] ,
sizes: ["S","M","L","XL","XXL"] },
	    {
      name: "D06:Sergio Ramos Real Madrid",
 images: ["images/fullsleeve/D06-01.jpg", "images/fullsleeve/D06-02.jpg"]  ,
sizes: ["S","M","L","XL"] },
	    {
      name: "D07:Ronaldo Real Madrid",
 images: ["images/fullsleeve/D07-01.jpg", "images/fullsleeve/D07-02.jpg"]   ,
sizes: ["S","M","L","XL","XXL"] },
	    {
      name: "D08:C.Ronaldo SPORTING",
 images: ["images/fullsleeve/D08-01.jpg", "images/fullsleeve/D08-02.jpg"]   ,
sizes: ["S","M","L","XL","XXL"] },
	    {
      name: "D09:C.Ronaldo MANCHESTER UNITED",
 images: ["images/fullsleeve/D09-01.jpg", "images/fullsleeve/D09-02.jpg"]   ,
sizes: ["S","M","L","XL","XXL"] },
	    {
      name: "D10:C.Ronaldo Real Madrid",
 images: ["images/fullsleeve/D10-01.jpg", "images/fullsleeve/D10-02.jpg"]   ,
sizes: ["S","M","L","XL","XXL"] },
	    {
      name: "D11:OLIVER KHAN",
 images: ["images/fullsleeve/D11-01.jpg", "images/fullsleeve/D11-02.jpg"]   ,
sizes: ["S","M","L","XL","XXL"] },
	    {
      name: "D12:ROONEY MACHESTER UNITED",
 images: ["images/fullsleeve/D12-01.jpg", "images/fullsleeve/D12-02.jpg"]   ,
sizes: ["S","M","L","XL","XXL"] },
	    {
      name: "D13:F.TORRES",
 images: ["images/fullsleeve/D13-01.jpg", "images/fullsleeve/D13-02.jpg"]   ,
sizes: ["S","M","L","XL","XXL"] },
	    {
      name: "D14:D.BECKHAM REAL MADRID",
 images: ["images/fullsleeve/D14-01.jpg", "images/fullsleeve/D14-02.jpg"]   ,
sizes: ["S","M","L","XL","XXL"] },
	    {
      name: "D15:ZIDANE FRANCE",
 images: ["images/fullsleeve/D15-01.jpg", "images/fullsleeve/D15-02.jpg"]   ,
sizes: ["S","M","L","XL","XXL"] }

	
  ],

  half: [
    {
      name: "C01:RONALDINHO AC MILAN",
      images: ["images/halfsleeve/C01-01.jpg", "images/halfsleeve/C01-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	{
      name: "C02:MESSI FC BARCELONA",
      images: ["images/halfsleeve/C02-01.jpg", "images/halfsleeve/C02-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	{
      name: "C03:RONALDO MANCHESTER",
      images: ["images/halfsleeve/C03-01.jpg", "images/halfsleeve/C03-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	{
      name: "C04:C.RONALDO MACHESTER",
      images: ["images/halfsleeve/C04-02.jpg", "images/halfsleeve/C04-01.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	{
      name: "C05:C.RONALDO REAL MADRID",
      images: ["images/halfsleeve/C05-02.jpg", "images/halfsleeve/C05-01.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	{
      name: "C06:C.RONALDO  JUVANTUS",
     images: ["images/halfsleeve/C06-02.jpg", "images/halfsleeve/C06-01.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	{
      name: "C07:MESSI FC BARCELONA",
      images: ["images/halfsleeve/C07-02.jpg", "images/halfsleeve/C07-01.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	{
      name: "C08:LAMINE YAMAL BARCELONA",
     images: ["images/halfsleeve/C08-02.jpg", "images/halfsleeve/C08-01.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	{
      name: "C09:LAMINE YAMAL BARCELONA",
     images: ["images/halfsleeve/C09-02.jpg", "images/halfsleeve/C09-01.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	{
      name: "C10:MBAPPE REAL MADRID",
     images: ["images/halfsleeve/C10-02.jpg", "images/halfsleeve/C10-01.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	{
      name: "C11:MBAPPE REAL MADRID",
      images: ["images/halfsleeve/C11-02.jpg", "images/halfsleeve/C11-01.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	{
      name: "C12:C.RONALDO SPORTING",
      images: ["images/halfsleeve/C12-02.jpg", "images/halfsleeve/C12-01.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	{
      name: "C13:BECKHAM ENGLAND",
      images: ["images/halfsleeve/C13-02.jpg", "images/halfsleeve/C13-01.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	{
      name: "C14:R.CARLOS REAL MADRID",
      images: ["images/halfsleeve/C14-02.jpg", "images/halfsleeve/C14-01.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	{
      name: "C15:C.RONALDO MACHESTER",
     images: ["images/halfsleeve/C15-02.jpg", "images/halfsleeve/C15-01.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	{
      name: "C16:GERRARD LIVERPOOL FC",
      images: ["images/halfsleeve/C16-02.jpg", "images/halfsleeve/C16-01.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	{
      name: "C17:MESSI FC BARCELONA",
     images: ["images/halfsleeve/C17-02.jpg", "images/halfsleeve/C17-01.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	{
      name: "C18:C.RONALDO SPORTING",
    images: ["images/halfsleeve/C18-02.jpg", "images/halfsleeve/C18-01.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	{
      name: "C19:MALDINI ENGLAND",
     images: ["images/halfsleeve/C19-02.jpg", "images/halfsleeve/C19-01.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	{
      name: "C20:C.RONALDO  JUVANTUS",
     images: ["images/halfsleeve/C20-02.jpg", "images/halfsleeve/C20-01.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	{
      name: "C21:BECKHAM MANCHESTER",
     images: ["images/halfsleeve/C21-02.jpg", "images/halfsleeve/C21-01.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	{
      name: "C22:MESSI FC BARCELONA",
     images: ["images/halfsleeve/C22-02.jpg", "images/halfsleeve/C22-01.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	{
      name: "C23:C.RONALDO MACHESTER",
      images: ["images/halfsleeve/C23-02.jpg", "images/halfsleeve/C23-01.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	{
      name: "C24:C.RONALDO PORTUGAL",
     images: ["images/halfsleeve/C24-02.jpg", "images/halfsleeve/C24-01.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	{
      name: "C25:CASILLAS READL MADRID GK",
     images: ["images/halfsleeve/C25-02.jpg", "images/halfsleeve/C25-01.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	{
      name: "C26:NEYMER SANTOS",
     images: ["images/halfsleeve/C26-02.jpg", "images/halfsleeve/C26-01.jpg"],
	  sizes: ["S","M","L","XL"]
    }
  ],

  collar: [
    {
      name: "A01:ZIDAN REAL MADRID",
      images: ["images/collarNorFsleeve/A01-01.jpg", "images/collarNorFsleeve/A01-02.jpg", "images/collarNorFsleeve/A01-03.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	  {
      name: "A02:BECKHAM ENGLAND",
      images: ["images/collarNorFsleeve/A02-01.jpg", "images/collarNorFsleeve/A02-02.jpg", "images/collarNorFsleeve/A02-03.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	  {
      name: "A03:BECKHAM ENGLAND",
      images: ["images/collarNorFsleeve/A03-01.jpg", "images/collarNorFsleeve/A03-02.jpg", "images/collarNorFsleeve/A03-03.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	  {
      name: "A04:R.CARLOS INTER MILAN",
      images: ["images/collarNorFsleeve/A04-01.jpg", "images/collarNorFsleeve/A04-02.jpg", "images/collarNorFsleeve/A04-03.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	  {
      name: "A05:ZIDANE FRANCE",
      images: ["images/collarNorFsleeve/A05-01.jpg", "images/collarNorFsleeve/A05-02.jpg", "images/collarNorFsleeve/A05-03.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	  {
      name: "A06:BUFFON PARMA FC",
      images: ["images/collarNorFsleeve/A06-01.jpg", "images/collarNorFsleeve/A06-02.jpg", "images/collarNorFsleeve/A06-03.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	  {
      name: "A07:MARADONA BOCA JUNIORS",
      images: ["images/collarNorFsleeve/A07-01.jpg", "images/collarNorFsleeve/A07-02.jpg", "images/collarNorFsleeve/A07-03.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	  {
      name: "A08:RONALDO BRAZIL",
      images: ["images/collarNorFsleeve/A08-01.jpg", "images/collarNorFsleeve/A08-02.jpg","images/collarNorFsleeve/A08-03.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	  {
      name: "A09:RONALDO MANCHESTER UNITED",
      images: ["images/collarNorFsleeve/A09-01.jpg", "images/collarNorFsleeve/A09-02.jpg", "images/collarNorFsleeve/A09-03.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	  {
      name: "A10:CRUYFF AJAX",
      images: ["images/collarNorFsleeve/A10-01.jpg", "images/collarNorFsleeve/A10-02.jpg","images/collarNorFsleeve/A10-03.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	  {
      name: "A11:MALDINI ITALY",
      images: ["images/collarNorFsleeve/A11-01.jpg", "images/collarNorFsleeve/A11-02.jpg","images/collarNorFsleeve/A11-03.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	  {
      name: "A12:BALLACK GERMANY",
      images: ["images/collarNorFsleeve/A12-01.jpg", "images/collarNorFsleeve/A12-02.jpg","images/collarNorFsleeve/A12-03.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	  {
      name: "A13:ZIDANE FRANCE",
      images: ["images/collarNorFsleeve/A13-01.jpg", "images/collarNorFsleeve/A13-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	  {
      name: "A14:F.TORRES",
      images: ["images/collarNorFsleeve/A14-01.jpg", "images/collarNorFsleeve/A14-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	  {
      name: "A15:R.CARLOS",
      images: ["images/collarNorFsleeve/A15-01.jpg", "images/collarNorFsleeve/A15-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	  {
      name: "A16:ZIDANE",
      images: ["images/collarNorFsleeve/A16-01.jpg", "images/collarNorFsleeve/A16-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	  {
      name: "A17:BECKHAM",
      images: ["images/collarNorFsleeve/A17-01.jpg", "images/collarNorFsleeve/A17-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	  {
      name: "A18:MALDINI",
      images: ["images/collarNorFsleeve/A18-01.jpg", "images/collarNorFsleeve/A18-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	  {
      name: "A19:RONALDO",
      images: ["images/collarNorFsleeve/A19-01.jpg", "images/collarNorFsleeve/A19-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	  {
      name: "A20:MULLER",
      images: ["images/collarNorFsleeve/A20-01.jpg", "images/collarNorFsleeve/A20-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	  {
      name: "A21:BECKHAM ENGLAND",
      images: ["images/collarNorFsleeve/A21-01.jpg", "images/collarNorFsleeve/A22-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	  {
      name: "A22:MALDINI",
      images: ["images/collarNorFsleeve/A22-01.jpg", "images/collarNorFsleeve/A22-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	  {
      name: "A23:F.TORRES",
      images: ["images/collarNorFsleeve/A23-01.jpg", "images/collarNorFsleeve/A23-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	{
      name: "A24:C. RONALDO PORTUGAL",
      images: ["images/collarNorFsleeve/A24-01.jpg", "images/collarNorFsleeve/A24-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	  {
      name: "A25:LAMPARD CHELSEA",
      images: ["images/collarNorFsleeve/A25-01.jpg", "images/collarNorFsleeve/A25-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	  {
      name: "A26:KAKA AC MILAN",
      images: ["images/collarNorFsleeve/A26-01.jpg", "images/collarNorFsleeve/A26-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	  {
      name: "A27:MARADONA ARGENTINA",
      images: ["images/collarNorFsleeve/A27-01.jpg", "images/collarNorFsleeve/A27-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	  {
      name: "A28:RONALDINHO BARCELONA",
      images: ["images/collarNorFsleeve/A28-01.jpg", "images/collarNorFsleeve/A28-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	  {
      name: "A29:ZIDAN FRANCE",
      images: ["images/collarNorFsleeve/A29-01.jpg", "images/collarNorFsleeve/A29-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	  {
      name: "A30:BECKHAM ENGLAND",
      images: ["images/collarNorFsleeve/A30-01.jpg", "images/collarNorFsleeve/A30-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	  {
      name: "A31:BECKHAM MANCHESTER UNITED",
      images: ["images/collarNorFsleeve/A31-01.jpg", "images/collarNorFsleeve/A31-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	  {
      name: "A32:OWEN NEW CASTLE",
      images: ["images/collarNorFsleeve/A32-01.jpg", "images/collarNorFsleeve/A32-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	  {
      name: "A33:BECKHAM MANCHESTER UNITED",
      images: ["images/collarNorFsleeve/A33-01.jpg", "images/collarNorFsleeve/A33-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	  {
      name: "A34:C. RONALDO BLACK PANTHER PORTUGAL",
      images: ["images/collarNorFsleeve/A34-01.jpg", "images/collarNorFsleeve/A34-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	  {
      name: "A35:KROOS GERMANY",
      images: ["images/collarNorFsleeve/A35-01.jpg", "images/collarNorFsleeve/A35-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	  {
      name: "A36:F.BECKENBAUER GERMANY 1996",
      images: ["images/collarNorFsleeve/A36-01.jpg", "images/collarNorFsleeve/A36-02.jpg"],
	  sizes: ["S","M","L","XL"]
    }
	,
	  {
      name: "A37:M.OWEN LIVERPOOL 93-95",
      images: ["images/collarNorFsleeve/A37-01.jpg", "images/collarNorFsleeve/A37-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	  {
      name: "A38:L.MESSI Barcelona 1999-2000",
      images: ["images/collarNorFsleeve/A38-01.jpg", "images/collarNorFsleeve/A38-02.jpg"],
	  sizes: ["S","M","L","XL"]
    }
  ],

  five: [
    {
      name: "B01:RONALDINHO PSG",
      images: ["images/fivesleeve/B01-01.jpg", "images/fivesleeve/B01-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	    {
      name: "B02:RIVALDO FC BARCELONA",
      images: ["images/fivesleeve/B02-01.jpg", "images/fivesleeve/B02-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	    {
      name: "B03:IBRAHIMOVIC",
      images: ["images/fivesleeve/B03-01.jpg", "images/fivesleeve/B03-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	    {
      name: "B04:IBRAHIMOVIC",
      images: ["images/fivesleeve/B04-01.jpg", "images/fivesleeve/B04-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	    {
      name: "B05:MESSI",
      images: ["images/fivesleeve/B05-01.jpg", "images/fivesleeve/B05-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	    {
      name: "B06:BALLACK GERMANY",
      images: ["images/fivesleeve/B06-01.jpg", "images/fivesleeve/B06-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	    {
      name: "B07:GERMANY RETRO",
      images: ["images/fivesleeve/B07-01.jpg", "images/fivesleeve/B07-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	    {
      name: "B08:BECKENBAUER GERMANY",
      images: ["images/fivesleeve/B08-01.jpg", "images/fivesleeve/B08-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	{
      name: "B09:C.RONALDO PORTUGAL",
      images: ["images/fivesleeve/B09-01.jpg", "images/fivesleeve/B09-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	    {
      name: "B10:F.TORRES LIVERPOOL",
      images: ["images/fivesleeve/B10-01.jpg", "images/fivesleeve/B10-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	    {
      name: "B11:MALDINI AC MILAN",
      images: ["images/fivesleeve/B11-01.jpg", "images/fivesleeve/B11-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	    {
      name: "B12:SERGIO RAMOS REAL MADRID",
      images: ["images/fivesleeve/B12-01.jpg", "images/fivesleeve/B12-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	    {
      name: "B13:MALDINI AC MILAN",
      images: ["images/fivesleeve/B13-01.jpg", "images/fivesleeve/B13-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	    {
      name: "B14:MESSI BARCELONA",
      images: ["images/fivesleeve/B14-01.jpg", "images/fivesleeve/B14-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	    {
      name: "B15:KROOS GERMANY",
      images: ["images/fivesleeve/B15-01.jpg", "images/fivesleeve/B15-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	    {
      name: "B16:MESSI ARGENTINA",
      images: ["images/fivesleeve/B16-01.jpg", "images/fivesleeve/B16-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	{
      name: "B17:V.PERSIE MANCHESTER UNITED",
      images: ["images/fivesleeve/B17-01.jpg", "images/fivesleeve/B17-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	    {
      name: "B18:BALLACK GERMANY",
      images: ["images/fivesleeve/B18-01.jpg", "images/fivesleeve/B18-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	    {
      name: "B19:ROONEY MANCHESTER UNITED",
      images: ["images/fivesleeve/B19-01.jpg", "images/fivesleeve/B19-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	    {
      name: "B20:MALDINI AC MILAN",
      images: ["images/fivesleeve/B20-01.jpg", "images/fivesleeve/B20-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	    {
      name: "B21:MESSI ARGENTINA",
      images: ["images/fivesleeve/B21-01.jpg", "images/fivesleeve/B21-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	    {
      name: "B22:BECKHAM REAL MADRID",
      images: ["images/fivesleeve/B22-01.jpg", "images/fivesleeve/B22-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	    {
      name: "B23:GERRARD LIVERPOOL",
      images: ["images/fivesleeve/B23-01.jpg", "images/fivesleeve/B23-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	    {
      name: "B24:C.RONALDO REAL MADRID",
      images: ["images/fivesleeve/B24-01.jpg", "images/fivesleeve/B24-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	{
      name: "B25:C.RONALDO REAL MADRID",
      images: ["images/fivesleeve/B25-01.jpg", "images/fivesleeve/B25-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	    {
      name: "B26:BECKHAM ENGLAND",
      images: ["images/fivesleeve/B26-01.jpg", "images/fivesleeve/B26-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	    {
      name: "B27:ROONEY MANCHESTER UNITED",
      images: ["images/fivesleeve/B27-01.jpg", "images/fivesleeve/B27-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	    {
      name: "B28:MESSI ARGENTINA",
      images: ["images/fivesleeve/B28-01.jpg", "images/fivesleeve/B28-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	    {
      name: "B29:GATTUSO AC MILAN",
      images: ["images/fivesleeve/B29-01.jpg", "images/fivesleeve/B29-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	    {
      name: "B30:MESSI BARCELONA",
      images: ["images/fivesleeve/B30-01.jpg", "images/fivesleeve/B30-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	    {
      name: "B31:C.RONALDO SPORTING",
      images: ["images/fivesleeve/B31-01.jpg", "images/fivesleeve/B31-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	    {
      name: "B32:MALDINI AC MILAN",
      images: ["images/fivesleeve/B32-01.jpg", "images/fivesleeve/B32-02.jpg"],
	  sizes: ["S","M","L","XL"]
    },
	{
      name: "B33:MATTHAUS BAYERN MUNIC",
      images: ["images/fivesleeve/B33-01.jpg", "images/fivesleeve/B33-02.jpg"],
	  sizes: ["S","M","L","XL"]
    }
	
  ],

  sleeveless: [
    {
      name: "A01:Basketball Bulls",
      images: ["images/sleeveless/A01-01.jpg", "images/sleeveless/A01-02.jpg"],
	  sizes: ["S","M","L","XL","XXL"]
    },
	    {
      name: "A02:Basketball Lakers",
      images: ["images/sleeveless/A02-01.jpg", "images/sleeveless/A02-02.jpg"],
	  sizes: ["S","M","L","XL","XXL"]
    }
  ]
};

function renderCategory(categoryKey) {
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
        <p>${categoryKey.toUpperCase()}</p>

        <select class="size-select">
          ${sizeOptions}
        </select>

        <button onclick="addToCart(
          '${p.name}',
          '${categoryKey}',
          this.previousElementSibling.value
        )">
          Add to Cart
        </button>
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
 * CART
 ***********************/
function addToCart(name, type, size) {
  cart.push({ name, type, size });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart");
}

function openCart() {
  document.getElementById("cartModal").style.display = "block";
  renderCart();
}

function closeCart() {
  document.getElementById("cartModal").style.display = "none";
}

function renderCart() {
  const div = document.getElementById("cartItems");
  div.innerHTML = "";

  cart.forEach((c, i) => {
    div.innerHTML += `
      <div class="cart-item">
        <span>${c.name} (${c.size})</span>
        <button class="remove" onclick="removeItem(${i})">X</button>
      </div>
    `;
  });
}

function removeItem(i) {
  cart.splice(i, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

/***********************
 * WHATSAPP CHECKOUT
 ***********************/
function checkout() {
  const name = document.getElementById("name").value;
  const mobile = document.getElementById("mobile").value;

  if (!name || !mobile || cart.length === 0) {
    alert("Please fill details and add items");
    return;
  }

  let msg = `🏆 *DOUTFIT SPORTS – RETRO JERSEY ORDER* 🏆%0A
━━━━━━━━━━━━━━━━%0A
👤 *Customer Name:* ${name}%0A
📞 *Mobile Number:* ${mobile}%0A
━━━━━━━━━━━━━━━━%0A
🛒 *Selected Jerseys:*%0A`;

cart.forEach((c, i) => {
  msg += `⚽ ${i + 1}. *${c.name}*%0A   👕 Size: ${c.size}%0A`;
});

msg += `
━━━━━━━━━━━━━━━━%0A
🚚 *FREE DELIVERY across Kerala*%0A
🙏 Please confirm availability & proceed with the order.%0A
🔥 Thank you for choosing *DOUTFIT SPORTS*!`;

  window.open(
    `https://wa.me/918056065969?text=${msg}`,
    "_blank"
  );
}

/***********************
 * INIT
 ***********************/
renderCategory("collar");

window.onload = function () {
  document.getElementById("cartModal").style.display = "none";
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
let currentCategory = "collar";

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
