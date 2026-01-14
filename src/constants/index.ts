export const DEPARTMENTS = [
    "Mathematics", 
    "Science", 
    "History", 
    "Language Arts", 
    "Physical Education", 
    "Arts"
];

export const DEPARTMENT_OPTIONS = DEPARTMENTS.map(dept => ({
    value: dept.toLowerCase().replace(/\s+/g, '_'),
    label: dept,
}));
