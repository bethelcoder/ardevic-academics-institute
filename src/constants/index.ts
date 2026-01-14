export const DEPARTMENTS = [
    "Mathematics", 
    "Science", 
    "History", 
    "Language Arts", 
    "Physics",
    "Computer Science",
    "Arts"
];

export const DEPARTMENT_OPTIONS = DEPARTMENTS.map(dept => ({
    value: dept,
    label: dept,
}));
