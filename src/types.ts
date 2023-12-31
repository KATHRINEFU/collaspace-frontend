import * as AntdIcons from "@ant-design/icons";

export enum HTTP {
  POST = "POST",
  GET = "GET",
  PATCH = "PATCH",
  DELETE = "DELETE",
  PUT = "PUT",
}

export interface IClient {
  account: IAccount;
  company: ICompany;
}

export interface IAccount {
  accountId: number;
  accountType: string;
  companyId: number;
  accountCurrentStatus: string;
  accountCurrentResponsibleDepartmentId: number;
  biddingPersonnel: number;
  biddingPersonnelEmployee?: IEmployee;
  salesPersonnel: number;
  salesPersonnelEmployee?: IEmployee;
  solutionArchitectPersonnel: number;
  solutionArchitectPersonnelEmployee?: IEmployee;
  accountCreationdate: Date;
  accountLastUpdatedate: Date;
  customerSuccessPersonnel: number;
  customerSuccessPersonnelEmployee?: IEmployee;
  accountCompany?: ICompany;
  files: [];
}

export interface ICompany {
  companyId: number;
  companyName: string;
  companyWebsite: string;
  joindate: Date;
  companyLogoUrl: string;
}
export interface ISignIn {
  email: string;
  password?: string;
  token?: string;
}
export interface IUser {
  id: number;
  email: string;
  token: string;
}
export interface IAnnouncement {
  id: number;
  teamId: number;
  teamName: string;
  creatorId: number;
  creatorName: string;
  creationDate: Date;
  content: string;
}

export interface ITeam {
  teamId: number;
  teamName: string;
  teamCreator: number;
  teamCreationdate: Date;
  teamType: string;
  teamDepartmentId?: number;
}

export interface IEvent {
  eventId: number;
  eventCreationdate?: Date;
  team: ITeam | null;
  eventCreator: number;
  eventType: string;
  eventTitle: string;
  eventDescription: string;
  eventExpired: boolean;
  eventLastUpdatedate?: Date;
  collaborations: IEventCollaboration[];
}

export interface IEventCollaboration {
  eventCollaborationId: number;
  team: ITeam;
  invitedate: Date;
  acceptStatus: boolean;
  teamRole: string;
}

export interface IDocumentEvent extends IEvent {
  link?: string;
  deadlineDate?: Date;
}

export interface IMeetingEvent extends IEvent {
  virtual: boolean;
  location?: string;
  link?: string;
  startTime: Date;
  endTime: Date;
  noteLink?: string;
  agendaLink?: string;
  meetingType?: string;
}

export interface IActivityEvent extends IEvent {
  virtual: boolean;
  location?: string;
  startTime: Date;
  endTime: Date;
}

export interface ITicket {
  ticketId: number;
  ticketCreator: number;
  ticketCreatorName?: string;
  ticketCreationdate?: Date;
  ticketLastUpdatedate?: Date;
  ticketTitle: string;
  ticketDescription: string;
  ticketStatus: string;
  priority: number;
  fromTeamId: number;
  fromTeamName?: string;
  dueDate?: Date;
  assigns: ITicketAssign[];
  ticketLogs: ITicketLog[];
  files: string[];
}

export interface ITicketAssign {
  ticketAssignId: number;
  employeeId: number;
  employeeName?: string;
  teamId: number;
  teamName?: string;
  role: string;
  ticketAssigndate: Date;
}

export interface ITicketLog {
  ticketLogId: number;
  ticketLogCreator: number;
  ticketLogCreatorName?: string;
  ticketLogCreationdate: Date;
  ticketLogContent: string;
}

export interface ICalendarItem {
  id: string;
  date: Date;
  type: string;
  content: string;
}

export interface IEmployee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  locationCountry: string;
  locationCity: string;
  departmentId: number;
  departmentName: string;
  startdate: Date;
  role: string;
  profileUrl: string;
}

export interface ITeamMember {
  employee: IEmployee;
  joindate: Date;
  role: string;
}

export type IconName = keyof typeof AntdIcons;
export interface INav {
  name: string;
  path: string;
  icon: React.ReactNode;
}

export enum environment {
  PRODUCTION = "production",
  DEVELOPMENT = "development",
}

export interface GoogleUserData {
  firstName: string;
  lastName: string;
  email: string;
  profilePicture: string;
  token: string;
}
