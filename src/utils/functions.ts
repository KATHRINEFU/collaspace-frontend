import { ITicket } from "../types";

export function mapToDocumentEvent(data: any) {
  return {
    eventId: data.eventId,
    eventCreationdate: new Date(data.eventCreationdate),
    team: data.team,
    eventCreator: data.eventCreator,
    eventType: data.eventType,
    eventTitle: data.eventTitle,
    eventDescription: data.eventDescription,
    eventExpired: data.eventExpired,
    eventLastUpdatedate: data.eventLastUpdatedate
      ? new Date(data.eventLastUpdatedate)
      : undefined,
    collaborations: data.collaborations,
    link: data.documentLink || null,
    deadlineDate: data.deadline ? new Date(data.deadline) : undefined,
  };
}

export function mapToMeetingEvent(data: any) {
  return {
    eventId: data.eventId,
    eventCreationdate: new Date(data.eventCreationdate),
    team: data.team,
    eventCreator: data.eventCreator,
    eventType: data.eventType,
    eventTitle: data.eventTitle,
    eventDescription: data.eventDescription,
    eventExpired: data.eventExpired,
    eventLastUpdatedate: data.eventLastUpdatedate
      ? new Date(data.eventLastUpdatedate)
      : undefined,
    collaborations: data.collaborations,
    virtual: data.meetingVirtual,
    location: data.meetingLocation,
    link: data.meetingLink,
    startTime: data.meetingStarttime
      ? new Date(data.meetingStarttime)
      : undefined,
    endTime: data.meetingEndtime ? new Date(data.meetingEndtime) : undefined,
    noteLink: data.meetingNoteLink,
    agendaLink: data.meetingAgendaLink,
    meetingType: data.meetingType,
  };
}

export function mapToActivityEvent(data: any) {
  return {
    eventId: data.eventId,
    eventCreationdate: new Date(data.eventCreationdate),
    team: data.team,
    eventCreator: data.eventCreator,
    eventType: data.eventType,
    eventTitle: data.eventTitle,
    eventDescription: data.eventDescription,
    eventExpired: data.eventExpired,
    eventLastUpdatedate: data.eventLastUpdatedate
      ? new Date(data.eventLastUpdatedate)
      : undefined,
    collaborations: data.collaborations,
    virtual: data.activityVirtual,
    location: data.activityLocation,
    startTime: data.activityStarttime
      ? new Date(data.activityStarttime)
      : undefined,
    endTime: data.activityEndtime ? new Date(data.activityEndtime) : undefined,
  };
}

export function mapEventDataToEvent(eventData: any) {
  switch (eventData.eventType) {
    case "document":
      return mapToDocumentEvent(eventData);
    case "meeting":
      return mapToMeetingEvent(eventData);
    case "activity":
      return mapToActivityEvent(eventData);
    default:
      return null;
  }
}

export function mapDataToTickets(data: any) {
  return {
    ticketId: data.ticketId,
    ticketCreator: data.ticketCreator,
    ticketCreatorName: data.ticketCreatorName,
    ticketCreationdate: data.ticketCreationdate,
    ticketLastUpdatedate: data.ticketLastUpdatedate,
    ticketTitle: data.ticketTitle,
    ticketDescription: data.ticketDescription,
    ticketStatus: data.ticketStatus,
    priority: data.ticketPriority,
    fromTeamId: data.ticketFromTeam,
    fromTeamName: data.fromTeamName,
    dueDate: data.ticketDuedate,
    assigns: data.assigns,
    ticketLogs: data.ticketLogs,
    files: data.files,
  };
}

export function mapDataInTicketAssignList(data: any) {
  return {
    ticketId: data.ticketId,
    ticketCreator: data.ticketCreator,
    ticketCreatorName: data.ticketCreatorName,
    ticketCreationdate: data.ticketCreationdate,
    ticketLastUpdatedate: data.ticketLastUpdatedate,
    ticketTitle: data.ticketTitle,
    ticketDescription: data.ticketDescription,
    ticketStatus: data.ticketStatus,
    priority: data.priority,
    fromTeamId: data.fromTeamId,
    fromTeamName: data.fromTeamName,
    dueDate: data.dueDate,
    assigns: data.assigns,
    ticketLogs: data.ticketLogs,
    files: data.files,
  };
}

export function mapDataToEmployee(data: any) {
  return {
    id: data.employeeId,
    firstName: data.employeeFirstname,
    lastName: data.employeeLastname,
    email: data.employeeEmail,
    phone: data.employeePhone,
    locationCountry: data.employeeLocationCountry,
    locationCity: data.employeeLocationCity,
    departmentId: data.departmentId,
    departmentName: data.departmentName,
    startdate: data.employeeStartdate,
    role: data.employeeRole,
    profileUrl: data.employeeProfileUrl,
  };
}

export function mapDataToTeamMember(data: any) {
  return {
    employee: {
      id: data.employeeId,
      firstName: data.employeeFirstname,
      lastName: data.employeeLastname,
      email: data.employeeEmail,
      phone: data.employeePhone,
      locationCountry: data.employeeLocationCountry,
      locationCity: data.employeeLocationCity,
      departmentId: data.departmentId,
      departmentName: "",
      startdate: new Date(data.employeeStartdate),
      role: data.employeeRole,
      profileUrl: data.employeeProfileUrl,
    },
    joindate: new Date(data.joindate),
    role: data.role,
  };
}

export function mapEventToCalendarItem(data: any) {
  let date;
  if (data.eventType === "document") {
    date = data.dueDate;
  } else if (data.event === "meeting" || data.eventType === "activity") {
    date = data.startTime;
  }

  return {
    id: "event" + data.eventId,
    date: date ? date : new Date(),
    type: "success",
    content: data.eventTitle,
  };
}

export function mapTicketToCalendarItem(data: ITicket) {
  return {
    id: "ticket" + data.ticketId,
    date: data.dueDate ? new Date(data.dueDate) : new Date(),
    type: "error",
    content: data.ticketTitle,
  };
}

export function mapDataToTeam(data: any) {
  return {
    teamId: data.teamId,
    teamName: data.teamName,
    teamCreator: data.teamCreator,
    teamCreationdate: data.teamCreationdate,
    teamType: data.teamType,
    teamDepartmentId: data.teamDepartmentId,
  };
}

export const getEventTypeColor = (eventType: string) => {
  switch (eventType) {
    case "document":
      return "#ffedd5";
    case "meeting":
      return "#fce7f3";
    case "activity":
      return "#ccfbf1";
    default:
      return "";
  }
};

export const getStatusColor = (status: string) => {
  switch (status) {
    case "pending":
      return "#d3f261";
    case "in progress":
      return "#ffd666";
    case "under review":
      return "#b37feb";
    case "resolved":
      return "#5cdbd3";
    default:
      return "";
  }
};

export const getPriorityColor = (priority: number) => {
  switch (priority) {
    case 1:
      return "#fff0f6";
    case 2:
      return "#ffadd2";
    case 3:
      return "#ff85c0";
    case 4:
      return "#eb2f96";
    case 5:
      return "#9e1068";
    default:
      return "";
  }
};

export function getFormattedDate(date: Date) {
  var month = ("0" + (date.getMonth() + 1)).slice(-2);
  var day = ("0" + date.getDate()).slice(-2);
  var year = date.getFullYear();
  var hour = ("0" + date.getHours()).slice(-2);
  var min = ("0" + date.getMinutes()).slice(-2);
  var seg = ("0" + date.getSeconds()).slice(-2);
  return year + "-" + month + "-" + day + " " + hour + ":" + min + ":" + seg;
}
