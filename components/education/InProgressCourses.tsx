import DropdownCard from "../ui/DropdownCard";

export default function InProgressCourses() {

    return (
    <DropdownCard
      image="/images/logos/humber_polytechnic.png"
      title="In Progress Courses"
      color="bg-gray-100"
    >

      <DropdownCard
      title="Application Testing"
      description="This course introduces students to the processes and methods of software testing that is crucial at all stages of the System Development 
      Lifecycle to ensure that developed applications meet requirements and specifications expected by the client. Students will learn how to build a test plan, 
      write test cases and incident/defect reports. This course will explore a variety of test approaches and allow students to learn application testing using 
      automated testing tools."
      />

      <DropdownCard
      title="Principles of Project Management"
      description="This course provides both the practice and the theory of planning and managing projects by introducing a variety of methodologies of the software development 
      life cycle such as Agile, Scrum, Kanban, Lean, XP (eXtreme Programming) and lean project management methodologies. DevOps will also be covered. Key roles, technologies 
      and activities in software development practices are covered and associated with the different software development processes. Students will have an overview of 
      traditional development methodologies as well as current and popular trends."
      />

      <DropdownCard
      title="Network Programming"
      description="In this course, students will learn to write programs that communicate with one another across networks. The course will cover the TCP/IP model and the 
      responsibility and protocols of each layer. Students will learn about programming using sockets as well as compare and develop applications that use TCP and UDP protocols."
      />

      <DropdownCard
      title="Advanced Database Programming"
      description="This course introduces students to PL/SQL and helps them understand the benefits of this powerful programming language. In the class, students 
      learn to create PL/SQL blocks of application code that can be shared by multiple forms, reports, and data management applications. Students learn to create anonymous 
      PL/SQL blocks, stored procedures, and functions. They learn about declaring variables and trapping exceptions. Students will also learn to develop stored procedures, 
      functions, packages, and database triggers. Students will learn to manage PL/SQL program units, manage dependencies, manipulate large objects, and use some of the 
      Oracle-supplied packages. Students use Oracle SQL Developer to develop these program units. Demonstrations and hands-on practice reinforce the fundamental concepts."
      />

      <DropdownCard 
      title="Web Application Development"
      description="Many Java web frameworks, such as Struts, are built on top of the Servlet and JavaServer Page specifications and base libraries. To fully understand how these 
      frameworks operate, and to be able to take full advantage of the facilities they offer, you should understand the foundations such frameworks are built on. This course takes you 
      through building web applications using the base Servlet and JavaServer Page libraries. The course discusses the Model-View-Controller pattern using Servlets as the Controller 
      and JavaServer Pages as the View. You will also learn how to hide complex UI interaction inside tag libraries. The course will show you how to build web applications using these 
      fundamental technologies and other frameworks."
      />

    </DropdownCard>
    )
}