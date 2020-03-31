import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  getAllProjects()
  {
   var projects=
  [
    { id: 11, name: "NET 4.5 + .NET Core 2.0 Entwickler und Solution Architekt", from: new Date(2016, 9), to: new Date(2019, 9), company: "Interflex Datensysteme GmbH, Germany",
    shortDesc: "Entwicklung und Migration eines Zutrittssystemes für BMW weltweit", 
    subProjects : 
    [
      { project : "Entwicklung und Konzeption von Offline-Lösungen, Besucherverwaltung, biometrischer Erkennung" },
      { project : "Entwicklung und Anpassung individueller Anforderungen der Web-Standardzutritts-Software „IF 6040“ an die BMW Spezifika" },
      { project : "Entwicklung von Monitoring- und Analysetools im Soft- und Hardware Umfeld" },
      { project : "Development Lead eines NearShore Partnernunternehmens in Prag, Tschechien" },
      { project : "Erstellung komplexer SQL Views und Reports zur Vorbereitung der Datenmigration" }
    ],
    technologies: ".NET 4.5, .NET Core, ASP.NET, VS 2015 + 2017, TFS + GIT, Oracle, Oracle SQL Developer, Draw IO, JIRA, SCRUM",
    isExpanded : true},
    { id: 10, name: ".NET 4.5 Web Entwickler", from: new Date(2015, 3), to: new Date(2015, 9), company: "Ingram Micro, Germany",
    shortDesc: "Entwicklung einer Web Anwendung für die Buchung und Abwicklung von Advertisements und Werbeschaltungen auf verschiedenen Platformen", 
    subProjects : 
    [
      { project : "Entwicklung einer ASP.NET MVC Anwendung basierend auf Razor Pages" },
      { project : "Entwicklung einer Oracle Datenbank" }
    ],
    technologies: ".NET 4.5, VS 2013, Oracle SQL Developer, ASP.NET MVC, Razor Pages",
    isExpanded : false},
    { id: 9, name: ".NET 4.5 Entwickler", from: new Date(2012, 6), to: new Date(2016, 8), company: "Continental AG Regensburg, Germany",
    shortDesc: "Entwicklung von Reporting und prozessunterstützenden Anbindungen an MKS (IMS) Integrity und Source System", 
    subProjects : 
    [
      { project : "Entwicklung eines Report Centers, über das verschiedenste Auswertungen aus dem Hauptsystem IMS/MKS von PTC erstellt werden" },
      { project : "Entwicklung eines Process Enhancement Tools, um den Anwendern den firmenweit gültigen Prozess automatisiert in das Hauptsystem MKS zu erleichtern" },
      { project : "Entwicklung eines Anwender Cockpits basierend auf WPF, das modulbasiert zahlreiche Workflows des Unternehmens abbildet" },
      { project : "Aufbau und Pflege eines automatisierten Builds (MS Build) inkl. custom Tasks" }
    ],
    technologies: ".NET 4.5, VS 2015, IMS/MKS Integrity & Source, Oracle SQL Developer, Windows Forms, WPF, WCF, MSBuild, Enterprise Architect, Ranorex",
    isExpanded : false},
    { id: 8, name: "Silverlight/WCF/.NET 3.5 Entwickler", from: new Date(2011, 10), to: new Date(2012, 5), company: "UniCredit AG München, Germany",
    shortDesc: "Weiterentwicklung einer Abwicklungsanwendung im Investment-Banking Bereich", 
    subProjects : 
    [
      { project : "Entwicklung von WCF Services mit Anbindungen an externe Pricing Systeme (WM, Bloomberg)" },
      { project : "Anpassung des User Interfaces für den internen Bereich (Silverlight)" },
      { project : "Erstellung und Anpassung des User Interfaces für den externen Bereich (Javascript)" },
      { project : "Anpassungen der bestehenden Oracle Datenbank" },
      { project : "Erstellung und Durchführung von Unit Tests" }
    ],
    technologies: ".NET 3.5, VS 2008, Subversion, PL/SQL Developer, WCF, Silverlight",
    isExpanded : false},
    { id: 7, name: "Silverlight/WPF/.NET 4.0 Entwickler", from: new Date(2011, 0), to: new Date(2011, 9), company: "GrassValley Weiterstadt, Germany",
    shortDesc: "Erstellung eines Content Management Systems (CMS) für die Filmindustrie für die Anlieferung und Ausspielung von Werbespots", 
    subProjects : 
    [
      { project : "Erstellung von Arbeitsplätzen(Frontends) im Web Umfeld (Silverlight)" },
      { project : "Erstellung von Arbeitsplätzen (Frontends) im Windows Umfeld (WPF)" },
      { project : "Erstellung von Services zur Kommunikation mit Video Servern (K2)" },
      { project : "Implementierung in C#" }
    ],
    technologies: ".NET 4.0, VS 2010, Silverlight, Windows Presentation Foundation, Windows Communication Foundation, Composite Application Library (PRISM), Unity, Dependency Injection, Windows Workflow Foundation (3.5), MS SQL Server 2008, ClearCase, Enterprise Architect",
    isExpanded : false},
    { id: 6, name: "C#/.NET 3.5/Biztalk Entwickler", from: new Date(2009, 8), to: new Date(2010, 11), company: "T-Systems München, Germany",
    shortDesc: "Weiterentwicklung & Anpassung eines automatisierten Provisionierungssystems; ab 06/10 .NET Lead eines 5-köpfigen Teams", 
    subProjects : 
    [
      { project : "Modellierung, Konzeption und Implementierung objektorientierter, verteilter Systeme" },
      { project : "Aufbau und Pflege eines automatisierten Builds (MS Build und TFS)" },
      { project : "Design und Entwicklung eines automatisierten verteilten Deployment Mechanismus" },
      { project : "Erstellung von Biztalk Komponenten (Orchestrations, Pipeline Components, Adapter, Rules) mit MS BTS 2009" },
      { project : "Implementierung von Geschäftslogik in den MS Backend Systemen Active Directory und Exchange" },
      { project : "Erstellung und Durchführung von Unit Tests" }
    ],
    technologies: ".NET 3.5, VS 2008, TFS 2008, BTS 2009, MS SQL Server 2008, Active Directory & Exchange, Windows Communication Foundation, Windows Presentation Foundation, Visual Studio Unit Test Framework, XML, XSD, Schematron",
    isExpanded : false},
    { id: 5, name: "C#/.NET 3.5 Entwickler", from: new Date(2008, 1), to: new Date(2009, 7), company: "Viasys Healthcare Würzburg, Germany",
    shortDesc: "Erstellung einer Workflow getriebenen Anwendung zur Durchführung klinischer Studien auf der ganzen Welt sowie deren Anbindung an zentrales Backend System", 
    subProjects : 
    [
      { project : "Analyse und Erstellen von funktionalen und technischen Requirements" },
      { project : "Erstellen des objektorientierten Designs in UML" },
      { project : "Implementierung in C#" },
      { project : "Erstellung und Durchführung von Unit Tests" },
      { project : "Erstellung von Datenauswertungen auf Basis von Crystal Reports" }
    ],
    technologies: "VS 2005, ASP.NET 2.0, WSE 3.0, Free VCS, Nunit, MS Visio, SQL Management Studio, ADO.NET 2.0, MS SQL Server 2005, SQLCLR",
    isExpanded : false},
    { id: 4, name: "C#/.NET 2.0 WebServices &  SQL Server 2005 Entwickler", from: new Date(2007, 4), to: new Date(2008, 0), company: "IO Computersysteme Schmid GmbH Regensburg, Germany",
    shortDesc: "Entwicklung von Warenwirtschaftssystemen für Apotheken", 
    subProjects : 
    [
      { project : "Synchrone und asynchrone Web Services mit WSE 3.0, Encryption, Übertragungsoptimierung (SOAP via http)" },
      { project : "Serverseitige Verarbeitung via stored procedures in MS SQL Server 2005" }
    ],
    technologies: "VS 2005, ASP.NET 2.0, WSE 3.0, Free VCS, Nunit, MS Visio, SQL Management Studio, ADO.NET 2.0, MS SQL Server 2005, SQLCLR",
    isExpanded : false},
    { id: 3, name: "C#/.NET Web & SQL Server 2000//2005 Entwickler", from: new Date(2003, 0), to: new Date(2007, 3), company: "Microsoft GmbH, Germany, International IT",
    shortDesc: "Entwickler von internen Web, Windows, Distributed (Web Services, .NET Remoting) und mobilen Applikationen", 
    subProjects : 
    [
      { project : "Development Lead von http://how : Employee Productivity Engagement (EPE) Web Application basierend auf .NET 2.0 und SQL Server 2005; entwickelt gemäß des Software Development Life Cycle (SDLC) Modells" },
      { project : "Erstellung und Support zahlreicher Infopath-Lösungen basierend auf Web Service Technologie, ebenfalls gemäß SDLC Methodologie entwickelt; Erstellung und Update der Technical Specifications" },
      { project : "Telesales 360°: Existierende Web Applikation von ASP.NET 1.1 zu ASP.NET 2.0 konvertiert" },
      { project : "Program Manager der internen Applikation „MS Vacation“ zur Verwaltung der Mitarbeiterurlaubsbuchung: Konvertierung der existierenden Plattform (klassisches asp)  zu .NET (~ $ 2 Millionen Budget); Verantwortlich für Functional Specifications, Design Blueprints, Risk Management, Financial Budget, Triage Meetings sowie selber als Programmierer im Einsatz" },
      { project : "PM der internen Applikation MS Deal Calculator (~ $ 100k Budget); gleiche Aufgabenstellung wie oben" },
      { project : "Systems Analyst für Fixed Asset Data Quality Management (SAP & SMS Datenintegration)" }
    ],
    technologies : "VS 2003/2005, ASP.NET 1.1/2.0, ADO.NET 2.0, Product Studio, MS Infopath, MS SQL Server 2000/2005, Windows Mobile 5.0, Compact Framework, SQL Mobile, Visual Source Safe",
    isExpanded : false},
    { id: 2, name: "Praktikum", from: new Date(2000, 7), to: new Date(2000, 9), company: "Hewlett-Packard GmbH Böblingen, Germany, IT-Department HR-Services",
    shortDesc: "", isExpanded : false},
    { id: 1, name: "Praktikum", from: new Date(1998, 8), to: new Date(1998, 9), company: "Sparkasse Deggendorf, Germany, Credit deparment",
     shortDesc: "", isExpanded : false }
  ];
  return projects;
}


  constructor() { }
}
