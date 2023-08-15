const userColumns = [
  { name: "ID", uid: "id", sortable: true },
  { name: "NAME", uid: "name", sortable: true },
  { name: "EMAIL", uid: "email", sortable: true },
  { name: "JOINED", uid: "joined" },
  { name: "ROLE", uid: "role", sortable: true },
];
const userStatusOptions = [];
const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    joined: "2023-01-15",
    role: "admin",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    joined: "2023-02-10",
    role: "user",
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice@example.com",
    joined: "2023-03-20",
    role: "user",
  },
  {
    id: 4,
    name: "Bob Williams",
    email: "bob@example.com",
    joined: "2023-04-05",
    role: "user",
  },
];

const recentRunsColumns = [
  { name: "ID", uid: "id", sortable: true },
  { name: "Job Title", uid: "jobTitle", sortable: true },
  { name: "Source IP", uid: "sourceIp", sortable: true },
  { name: "Destination IP", uid: "destinationIp", sortable: true },
  { name: "Created", uid: "created" },
  { name: "Status", uid: "status" },
  { name: "ACTIONS", uid: "actions" },
];
const recentRunsStatusOptions = [
  { name: "Sucessful", uid: "sucessful" },
  { name: "Failed", uid: "failed" },
];
const recentRuns = [
  {
    id: 1,
    jobTitle: "90822",
    sourceIp: "192.168.8.1",
    destinationIp: "100.10.11.2",
    created: "2020-01-01",
    status: "sucessful",
  },
  {
    id: 2,
    jobTitle: "90822",
    sourceIp: "192.168.8.1",
    destinationIp: "100.10.11.2",
    created: "2020-01-01",
    status: "failed",
  },
  {
    id: 3,
    jobTitle: "90822",
    sourceIp: "192.168.8.1",
    destinationIp: "100.10.11.2",
    created: "2020-01-01",
    status: "sucessful",
  },
  {
    id: 4,
    jobTitle: "90822",
    sourceIp: "192.168.8.1",
    destinationIp: "100.10.11.2",
    created: "2020-01-01",
    status: "failed",
  },
  {
    id: 5,
    jobTitle: "90822",
    sourceIp: "192.168.8.1",
    destinationIp: "100.10.11.2",
    created: "2020-01-01",
    status: "sucessful",
  },
  {
    id: 6,
    jobTitle: "90822",
    sourceIp: "192.168.8.1",
    destinationIp: "100.10.11.2",
    created: "2020-01-01",
    status: "failed",
  },
  {
    id: 7,
    jobTitle: "90822",
    sourceIp: "192.168.8.1",
    destinationIp: "100.10.11.2",
    created: "2020-01-01",
    status: "sucessful",
  },
];

const departmentsColumns = [
  { name: "ID", uid: "id", sortable: true },
  { name: "NAME", uid: "name", sortable: true },
  { name: "MEMBERS", uid: "members", sortable: true },
  { name: "PROJECTS", uid: "projects", sortable: true },
];
const departmentsStatusOptions = [
  //   { name: "Active", uid: "active" },
  //   { name: "Paused", uid: "paused" },
  //   { name: "Vacation", uid: "vacation" },
];
const departments = [
  {
    id: 1,
    name: "IT",
    role: "CEO",
    team: "Manmembersment",
    status: "active",
    members: "29",
    projects: "10",
    avatar: "https://cdn-icons-png.flaticon.com/512/5356/5356478.png",
    // email: "tony.reichert@example.com",
  },
  {
    id: 2,
    name: "Development",
    role: "Tech Lead",
    team: "Development",
    status: "paused",
    members: "25",
    projects: "20",

    avatar: "https://cdn-icons-png.flaticon.com/512/5356/5356478.png",
    // email: "zoey.lang@example.com",
  },
  {
    id: 3,
    name: "Marketing",
    role: "Sr. Dev",
    team: "Development",
    status: "active",
    members: "22",
    projects: "4",
    avatar: "https://cdn-icons-png.flaticon.com/512/5356/5356478.png",
    // email: "jane.fisher@example.com",
  },
  {
    id: 4,
    name: "Finance",
    role: "C.M.",
    team: "Marketing",
    status: "vacation",
    members: "28",
    projects: "10",
    avatar: "https://cdn-icons-png.flaticon.com/512/5356/5356478.png",
    // email: "william.howard@example.com",
  },
  {
    id: 5,
    name: "Operations",
    role: "S. Manmembersr",
    team: "Sales",
    status: "active",
    members: "24",
    projects: "10",
    avatar: "https://cdn-icons-png.flaticon.com/512/5356/5356478.png",
    // email: "kristen.cooper@example.com",
  },
  {
    key: 6,
    name: "Sales",
    role: "P. Manmembersr",
    team: "Manmembersment",
    members: "29",
    projects: "10",
    avatar: "https://cdn-icons-png.flaticon.com/512/5356/5356478.png",
    // email: "brian.kim@example.com",
    status: "Active",
  },
  {
    id: 7,
    name: "Customer Support",
    role: "Designer",
    team: "Design",
    status: "paused",
    members: "27",
    projects: "10",
    avatar: "https://cdn-icons-png.flaticon.com/512/5356/5356478.png",
    // email: "michael.hunt@example.com",
  },
  {
    id: 8,
    name: "HR",
    role: "HR Manmembersr",
    team: "HR",
    status: "active",
    members: "31",
    projects: "10",
    avatar: "https://cdn-icons-png.flaticon.com/512/5356/5356478.png",
    // email: "samantha.brooks@example.com",
  },
  {
    id: 9,
    name: "Manmembersment",
    role: "F. Manmembersr",
    team: "Finance",
    status: "vacation",
    members: "33",
    projects: "10",
    avatar: "https://cdn-icons-png.flaticon.com/512/5356/5356478.png",
    // email: "frank.harrison@example.com",
  },
];

const projectColumns = [
  { name: "ID", uid: "id", sortable: true },
  { name: "TITLE", uid: "title", sortable: true },
  { name: "Description", uid: "sourceIp", sortable: true },
  //   { name: "DESTINATION IP", uid: "destinationIp", sortable: true },
  { name: "CREATED", uid: "created" },
  { name: "STATUS", uid: "status", sortable: true },
  //   { name: "ACTIONS", uid: "actions" },
];
const projectStatusOptions = [
  { name: "Active", uid: "active" },
  { name: "Paused", uid: "paused" },
];
const project = [
  {
    id: 1,
    title: "Title 1",
    sourceIp: "description of projects ",
    destinationIp: "192.168.1.1",
    created: "2020-01-01",
    status: "active",
  },
  {
    id: 2,
    title: "Title 2",
    sourceIp: "description of projects ",
    destinationIp: "192.168.1.1",
    created: "2020-01-01",
    status: "active",
  },
  {
    id: 3,
    title: "Title 3",
    sourceIp: "description of projects ",
    destinationIp: "192.168.1.1",
    created: "2020-01-01",
    status: "active",
  },
];

const jobColumns = [
  { name: "ID", uid: "id", sortable: true },
  { name: "TITLE", uid: "title", sortable: true },
  { name: "SOURCE IP", uid: "sourceIp", sortable: true },
  { name: "DESTINATION IP", uid: "destinationIp", sortable: true },
  { name: "CREATED", uid: "created" },
  { name: "STATUS", uid: "status", sortable: true },
  { name: "ACTIONS", uid: "actions" },
];
const jobStatusOptions = [
  { name: "Sucessful", uid: "sucessful" },
  { name: "Failed", uid: "failed" },
];
const jobs = [
  {
    id: 1,
    title: "90822",
    sourceIp: "192.168.0.1",
    destinationIp: "192.168.1.1",
    created: "2020-01-01",
    status: "successful",
  },
  {
    id: 2,
    title: "90822",
    sourceIp: "192.168.0.1",
    destinationIp: "192.168.1.1",
    created: "2020-01-01",
    status: "failed",
  },
  {
    id: 3,
    title: "90822",
    sourceIp: "192.168.0.1",
    destinationIp: "192.168.1.1",
    created: "2020-01-01",
    status: "successful",
  },
];

const runLogsColumns = [
  { name: "Level", uid: "level", sortable: true },
  { name: "Date Time", uid: "dateTime", sortable: true },
  { name: "Description", uid: "description", sortable: true },
  { name: "ID", uid: "id", sortable: true },
  // { name: "ACTIONS", uid: "actions" },
];
const runLogsStatusOptions = [];
const runLogs = [
  {
    id: 1,
    level: "INFO",
    dateTime: "2020-01-01",
    description: "description of projects ",
  },
  {
    id: 2,
    level: "INFO",
    dateTime: "2020-01-01",
    description: "description of projects ",
  },
  {
    id: 3,
    level: "INFO",
    dateTime: "2020-01-01",
    description: "description of projects ",
  },
  {
    id: 4,
    level: "INFO",
    dateTime: "2020-01-01",
    description: "description of projects ",
  },
];

export {
  userColumns,
  users,
  userStatusOptions,
  departmentsStatusOptions,
  departments,
  departmentsColumns,
  projectStatusOptions,
  projectColumns,
  project,
  jobStatusOptions,
  jobColumns,
  jobs,
  recentRunsColumns,
  recentRunsStatusOptions,
  recentRuns,
  runLogsColumns,
  runLogsStatusOptions,
  runLogs,
};
