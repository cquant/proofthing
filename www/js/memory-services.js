'use strict';

devLog('memory-services LOADING-START');

(function () {
    // Quadrupled the employees, proof/test more scrolling.
    // Kept the hiearchy proper. So the CEO instead of having 4 reports now has 16 reports.  Many like such.

    var employees = [
            {"id": 1, "firstName": "James",         "lastName": "King",     "managerId": 0, "managerName": "",                   "reports": 16, "title": "President and CEO",    "department": "Corporate",   "cellPhone": "617-000-0001", "officePhone": "781-000-0001", "email": "jking@fakemail.com",     "city": "Boston, MA", "pic": "james_king.jpg",     "twitterId": "@fakejking",     "blog": "http://coenraets.org"},

            {"id": 2, "firstName": "Julie",         "lastName": "Taylor",   "managerId": 1, "managerName": "James King",         "reports": 2,  "title": "VP of Marketing",      "department": "Marketing",   "cellPhone": "617-000-0002", "officePhone": "781-000-0002", "email": "jtaylor@fakemail.com",   "city": "Boston, MA", "pic": "julie_taylor.jpg",   "twitterId": "@fakejtaylor",   "blog": "http://coenraets.org"},
            {"id": 3, "firstName": "Eugene",        "lastName": "Lee",      "managerId": 1, "managerName": "James King",         "reports": 0,  "title": "CFO",                  "department": "Accounting",  "cellPhone": "617-000-0003", "officePhone": "781-000-0003", "email": "elee@fakemail.com",      "city": "Boston, MA", "pic": "eugene_lee.jpg",     "twitterId": "@fakeelee",      "blog": "http://coenraets.org"},
            {"id": 4, "firstName": "John",          "lastName": "Williams", "managerId": 1, "managerName": "James King",         "reports": 3,  "title": "VP of Engineering",    "department": "Engineering", "cellPhone": "617-000-0004", "officePhone": "781-000-0004", "email": "jwilliams@fakemail.com", "city": "Boston, MA", "pic": "john_williams.jpg",  "twitterId": "@fakejwilliams", "blog": "http://coenraets.org"},
            {"id": 5, "firstName": "Ray",           "lastName": "Moore",    "managerId": 1, "managerName": "James King",         "reports": 2,  "title": "VP of Sales",          "department": "Sales",       "cellPhone": "617-000-0005", "officePhone": "781-000-0005", "email": "rmoore@fakemail.com",    "city": "Boston, MA", "pic": "ray_moore.jpg",      "twitterId": "@fakermoore",    "blog": "http://coenraets.org"},

            {"id": 6, "firstName": "Paul",          "lastName": "Jones",    "managerId": 4, "managerName": "John Williams",      "reports": 0,  "title": "QA Manager",           "department": "Engineering", "cellPhone": "617-000-0006", "officePhone": "781-000-0006", "email": "pjones@fakemail.com",    "city": "Boston, MA", "pic": "paul_jones.jpg",     "twitterId": "@fakepjones",    "blog": "http://coenraets.org"},
            {"id": 7, "firstName": "Paula",         "lastName": "Gates",    "managerId": 4, "managerName": "John Williams",      "reports": 0,  "title": "Software Architect",   "department": "Engineering", "cellPhone": "617-000-0007", "officePhone": "781-000-0007", "email": "pgates@fakemail.com",    "city": "Boston, MA", "pic": "paula_gates.jpg",    "twitterId": "@fakepgates",    "blog": "http://coenraets.org"},
            {"id": 8, "firstName": "Lisa",          "lastName": "Wong",     "managerId": 2, "managerName": "Julie Taylor",       "reports": 0,  "title": "Marketing Manager",    "department": "Marketing",   "cellPhone": "617-000-0008", "officePhone": "781-000-0008", "email": "lwong@fakemail.com",     "city": "Boston, MA", "pic": "lisa_wong.jpg",      "twitterId": "@fakelwong",     "blog": "http://coenraets.org"},
            {"id": 9, "firstName": "Gary",          "lastName": "Donovan",  "managerId": 2, "managerName": "Julie Taylor",       "reports": 0,  "title": "Marketing Manager",    "department": "Marketing",   "cellPhone": "617-000-0009", "officePhone": "781-000-0009", "email": "gdonovan@fakemail.com",  "city": "Boston, MA", "pic": "gary_donovan.jpg",   "twitterId": "@fakegdonovan",  "blog": "http://coenraets.org"},
            {"id": 10, "firstName": "Kathleen",     "lastName": "Byrne",    "managerId": 5, "managerName": "Ray Moore",          "reports": 0,  "title": "Sales Representative", "department": "Sales",       "cellPhone": "617-000-0010", "officePhone": "781-000-0010", "email": "kbyrne@fakemail.com",    "city": "Boston, MA", "pic": "kathleen_byrne.jpg", "twitterId": "@fakekbyrne",    "blog": "http://coenraets.org"},
            {"id": 11, "firstName": "Amy",          "lastName": "Jones",    "managerId": 5, "managerName": "Ray Moore",          "reports": 0,  "title": "Sales Representative", "department": "Sales",       "cellPhone": "617-000-0011", "officePhone": "781-000-0011", "email": "ajones@fakemail.com",    "city": "Boston, MA", "pic": "amy_jones.jpg",      "twitterId": "@fakeajones",    "blog": "http://coenraets.org"},
            {"id": 12, "firstName": "Steven",       "lastName": "Wells",    "managerId": 4, "managerName": "John Williams",      "reports": 0,  "title": "Software Architect",   "department": "Engineering", "cellPhone": "617-000-0012", "officePhone": "781-000-0012", "email": "swells@fakemail.com",    "city": "Boston, MA", "pic": "steven_wells.jpg",   "twitterId": "@fakeswells",    "blog": "http://coenraets.org"},

            {"id": 52, "firstName": "DupJulie",     "lastName": "Taylor",   "managerId": 1, "managerName": "James King",         "reports": 2,  "title": "VP of Marketing",      "department": "Marketing",   "cellPhone": "617-000-0002", "officePhone": "781-000-0002", "email": "jtaylor@fakemail.com",   "city": "Boston, MA", "pic": "julie_taylor.jpg",   "twitterId": "@fakejtaylor",   "blog": "http://coenraets.org"},
            {"id": 53, "firstName": "DupEugene",    "lastName": "Lee",      "managerId": 1, "managerName": "James King",         "reports": 0,  "title": "CFO Assistant",        "department": "Accounting",  "cellPhone": "617-000-0003", "officePhone": "781-000-0003", "email": "elee@fakemail.com",      "city": "Boston, MA", "pic": "eugene_lee.jpg",     "twitterId": "@fakeelee",      "blog": "http://coenraets.org"},
            {"id": 54, "firstName": "DupJohn",      "lastName": "Williams", "managerId": 1, "managerName": "James King",         "reports": 3,  "title": "VP of Engineering",    "department": "Engineering", "cellPhone": "617-000-0004", "officePhone": "781-000-0004", "email": "jwilliams@fakemail.com", "city": "Boston, MA", "pic": "john_williams.jpg",  "twitterId": "@fakejwilliams", "blog": "http://coenraets.org"},
            {"id": 55, "firstName": "DupRay",       "lastName": "Moore",    "managerId": 1, "managerName": "James King",         "reports": 2,  "title": "VP of Sales",          "department": "Sales",       "cellPhone": "617-000-0005", "officePhone": "781-000-0005", "email": "rmoore@fakemail.com",    "city": "Boston, MA", "pic": "ray_moore.jpg",      "twitterId": "@fakermoore",    "blog": "http://coenraets.org"},

            {"id": 56, "firstName": "DupPaul",      "lastName": "Jones",    "managerId": 54, "managerName": "DupJohn Williams",  "reports": 0,  "title": "QA Manager",           "department": "Engineering", "cellPhone": "617-000-0006", "officePhone": "781-000-0006", "email": "pjones@fakemail.com",    "city": "Boston, MA", "pic": "paul_jones.jpg",     "twitterId": "@fakepjones",    "blog": "http://coenraets.org"},
            {"id": 57, "firstName": "DupPaula",     "lastName": "Gates",    "managerId": 54, "managerName": "DupJohn Williams",  "reports": 0,  "title": "Software Architect",   "department": "Engineering", "cellPhone": "617-000-0007", "officePhone": "781-000-0007", "email": "pgates@fakemail.com",    "city": "Boston, MA", "pic": "paula_gates.jpg",    "twitterId": "@fakepgates",    "blog": "http://coenraets.org"},
            {"id": 58, "firstName": "DupLisa",      "lastName": "Wong",     "managerId": 52, "managerName": "DupJulie Taylor",   "reports": 0,  "title": "Marketing Manager",    "department": "Marketing",   "cellPhone": "617-000-0008", "officePhone": "781-000-0008", "email": "lwong@fakemail.com",     "city": "Boston, MA", "pic": "lisa_wong.jpg",      "twitterId": "@fakelwong",     "blog": "http://coenraets.org"},
            {"id": 59, "firstName": "DupGary",      "lastName": "Donovan",  "managerId": 52, "managerName": "DupJulie Taylor",   "reports": 0,  "title": "Marketing Manager",    "department": "Marketing",   "cellPhone": "617-000-0009", "officePhone": "781-000-0009", "email": "gdonovan@fakemail.com",  "city": "Boston, MA", "pic": "gary_donovan.jpg",   "twitterId": "@fakegdonovan",  "blog": "http://coenraets.org"},
            {"id": 60, "firstName": "DupKathleen",  "lastName": "Byrne",    "managerId": 55, "managerName": "DupRay Moore",      "reports": 0,  "title": "Sales Representative", "department": "Sales",       "cellPhone": "617-000-0010", "officePhone": "781-000-0010", "email": "kbyrne@fakemail.com",    "city": "Boston, MA", "pic": "kathleen_byrne.jpg", "twitterId": "@fakekbyrne",    "blog": "http://coenraets.org"},
            {"id": 61, "firstName": "DupAmy",       "lastName": "Jones",    "managerId": 55, "managerName": "DupRay Moore",      "reports": 0,  "title": "Sales Representative", "department": "Sales",       "cellPhone": "617-000-0011", "officePhone": "781-000-0011", "email": "ajones@fakemail.com",    "city": "Boston, MA", "pic": "amy_jones.jpg",      "twitterId": "@fakeajones",    "blog": "http://coenraets.org"},
            {"id": 62, "firstName": "DupSteven",    "lastName": "Wells",    "managerId": 54, "managerName": "DupJohn Williams",  "reports": 0,  "title": "Software Architect",   "department": "Engineering", "cellPhone": "617-000-0012", "officePhone": "781-000-0012", "email": "swells@fakemail.com",    "city": "Boston, MA", "pic": "steven_wells.jpg",   "twitterId": "@fakeswells",    "blog": "http://coenraets.org"},

            {"id": 72, "firstName": "Dup2Julie",    "lastName": "Taylor",   "managerId": 1, "managerName": "James King",         "reports": 2,  "title": "VP of Marketing",      "department": "Marketing",   "cellPhone": "617-000-0002", "officePhone": "781-000-0002", "email": "jtaylor@fakemail.com",   "city": "Boston, MA", "pic": "julie_taylor.jpg",   "twitterId": "@fakejtaylor",   "blog": "http://coenraets.org"},
            {"id": 73, "firstName": "Dup2Eugene",   "lastName": "Lee",      "managerId": 1, "managerName": "James King",         "reports": 0,  "title": "CFO Assistant",        "department": "Accounting",  "cellPhone": "617-000-0003", "officePhone": "781-000-0003", "email": "elee@fakemail.com",      "city": "Boston, MA", "pic": "eugene_lee.jpg",     "twitterId": "@fakeelee",      "blog": "http://coenraets.org"},
            {"id": 74, "firstName": "Dup2John",     "lastName": "Williams", "managerId": 1, "managerName": "James King",         "reports": 3,  "title": "VP of Engineering",    "department": "Engineering", "cellPhone": "617-000-0004", "officePhone": "781-000-0004", "email": "jwilliams@fakemail.com", "city": "Boston, MA", "pic": "john_williams.jpg",  "twitterId": "@fakejwilliams", "blog": "http://coenraets.org"},
            {"id": 75, "firstName": "Dup2Ray",      "lastName": "Moore",    "managerId": 1, "managerName": "James King",         "reports": 2,  "title": "VP of Sales",          "department": "Sales",       "cellPhone": "617-000-0005", "officePhone": "781-000-0005", "email": "rmoore@fakemail.com",    "city": "Boston, MA", "pic": "ray_moore.jpg",      "twitterId": "@fakermoore",    "blog": "http://coenraets.org"},

            {"id": 76, "firstName": "Dup2Paul",     "lastName": "Jones",    "managerId": 74, "managerName": "Dup2John Williams", "reports": 0,  "title": "QA Manager",           "department": "Engineering", "cellPhone": "617-000-0006", "officePhone": "781-000-0006", "email": "pjones@fakemail.com",    "city": "Boston, MA", "pic": "paul_jones.jpg",     "twitterId": "@fakepjones",    "blog": "http://coenraets.org"},
            {"id": 77, "firstName": "Dup2Paula",    "lastName": "Gates",    "managerId": 74, "managerName": "Dup2John Williams", "reports": 0,  "title": "Software Architect",   "department": "Engineering", "cellPhone": "617-000-0007", "officePhone": "781-000-0007", "email": "pgates@fakemail.com",    "city": "Boston, MA", "pic": "paula_gates.jpg",    "twitterId": "@fakepgates",    "blog": "http://coenraets.org"},
            {"id": 78, "firstName": "Dup2Lisa",     "lastName": "Wong",     "managerId": 72, "managerName": "Dup2Julie Taylor",  "reports": 0,  "title": "Marketing Manager",    "department": "Marketing",   "cellPhone": "617-000-0008", "officePhone": "781-000-0008", "email": "lwong@fakemail.com",     "city": "Boston, MA", "pic": "lisa_wong.jpg",      "twitterId": "@fakelwong",     "blog": "http://coenraets.org"},
            {"id": 79, "firstName": "Dup2Gary",     "lastName": "Donovan",  "managerId": 72, "managerName": "Dup2Julie Taylor",  "reports": 0,  "title": "Marketing Manager",    "department": "Marketing",   "cellPhone": "617-000-0009", "officePhone": "781-000-0009", "email": "gdonovan@fakemail.com",  "city": "Boston, MA", "pic": "gary_donovan.jpg",   "twitterId": "@fakegdonovan",  "blog": "http://coenraets.org"},
            {"id": 70, "firstName": "Dup2Kathleen", "lastName": "Byrne",    "managerId": 75, "managerName": "Dup2Ray Moore",     "reports": 0,  "title": "Sales Representative", "department": "Sales",       "cellPhone": "617-000-0010", "officePhone": "781-000-0010", "email": "kbyrne@fakemail.com",    "city": "Boston, MA", "pic": "kathleen_byrne.jpg", "twitterId": "@fakekbyrne",    "blog": "http://coenraets.org"},
            {"id": 71, "firstName": "Dup2Amy",      "lastName": "Jones",    "managerId": 75, "managerName": "Dup2Ray Moore",     "reports": 0,  "title": "Sales Representative", "department": "Sales",       "cellPhone": "617-000-0011", "officePhone": "781-000-0011", "email": "ajones@fakemail.com",    "city": "Boston, MA", "pic": "amy_jones.jpg",      "twitterId": "@fakeajones",    "blog": "http://coenraets.org"},
            {"id": 72, "firstName": "Dup2Steven",   "lastName": "Wells",    "managerId": 74, "managerName": "Dup2John Williams", "reports": 0,  "title": "Software Architect",   "department": "Engineering", "cellPhone": "617-000-0012", "officePhone": "781-000-0012", "email": "swells@fakemail.com",    "city": "Boston, MA", "pic": "steven_wells.jpg",   "twitterId": "@fakeswells",    "blog": "http://coenraets.org"},

            {"id": 82, "firstName": "Dup3Julie",    "lastName": "Taylor",   "managerId": 1, "managerName": "James King",         "reports": 2,  "title": "VP of Marketing",      "department": "Marketing",   "cellPhone": "617-000-0002", "officePhone": "781-000-0002", "email": "jtaylor@fakemail.com",   "city": "Boston, MA", "pic": "julie_taylor.jpg",   "twitterId": "@fakejtaylor",   "blog": "http://coenraets.org"},
            {"id": 83, "firstName": "Dup3Eugene",   "lastName": "Lee",      "managerId": 1, "managerName": "James King",         "reports": 0,  "title": "CFO Assistant",        "department": "Accounting",  "cellPhone": "617-000-0003", "officePhone": "781-000-0003", "email": "elee@fakemail.com",      "city": "Boston, MA", "pic": "eugene_lee.jpg",     "twitterId": "@fakeelee",      "blog": "http://coenraets.org"},
            {"id": 84, "firstName": "Dup3John",     "lastName": "Williams", "managerId": 1, "managerName": "James King",         "reports": 3,  "title": "VP of Engineering",    "department": "Engineering", "cellPhone": "617-000-0004", "officePhone": "781-000-0004", "email": "jwilliams@fakemail.com", "city": "Boston, MA", "pic": "john_williams.jpg",  "twitterId": "@fakejwilliams", "blog": "http://coenraets.org"},
            {"id": 85, "firstName": "Dup3Ray",      "lastName": "Moore",    "managerId": 1, "managerName": "James King",         "reports": 2,  "title": "VP of Sales",          "department": "Sales",       "cellPhone": "617-000-0005", "officePhone": "781-000-0005", "email": "rmoore@fakemail.com",    "city": "Boston, MA", "pic": "ray_moore.jpg",      "twitterId": "@fakermoore",    "blog": "http://coenraets.org"},

            {"id": 86, "firstName": "Dup3Paul",     "lastName": "Jones",    "managerId": 84, "managerName": "Dup3John Williams", "reports": 0,  "title": "QA Manager",           "department": "Engineering", "cellPhone": "617-000-0006", "officePhone": "781-000-0006", "email": "pjones@fakemail.com",    "city": "Boston, MA", "pic": "paul_jones.jpg",     "twitterId": "@fakepjones",    "blog": "http://coenraets.org"},
            {"id": 87, "firstName": "Dup3Paula",    "lastName": "Gates",    "managerId": 84, "managerName": "Dup3John Williams", "reports": 0,  "title": "Software Architect",   "department": "Engineering", "cellPhone": "617-000-0007", "officePhone": "781-000-0007", "email": "pgates@fakemail.com",    "city": "Boston, MA", "pic": "paula_gates.jpg",    "twitterId": "@fakepgates",    "blog": "http://coenraets.org"},
            {"id": 88, "firstName": "Dup3Lisa",     "lastName": "Wong",     "managerId": 82, "managerName": "Dup3Julie Taylor",  "reports": 0,  "title": "Marketing Manager",    "department": "Marketing",   "cellPhone": "617-000-0008", "officePhone": "781-000-0008", "email": "lwong@fakemail.com",     "city": "Boston, MA", "pic": "lisa_wong.jpg",      "twitterId": "@fakelwong",     "blog": "http://coenraets.org"},
            {"id": 89, "firstName": "Dup3Gary",     "lastName": "Donovan",  "managerId": 82, "managerName": "Dup3Julie Taylor",  "reports": 0,  "title": "Marketing Manager",    "department": "Marketing",   "cellPhone": "617-000-0009", "officePhone": "781-000-0009", "email": "gdonovan@fakemail.com",  "city": "Boston, MA", "pic": "gary_donovan.jpg",   "twitterId": "@fakegdonovan",  "blog": "http://coenraets.org"},
            {"id": 90, "firstName": "Dup3Kathleen", "lastName": "Byrne",    "managerId": 85, "managerName": "Dup3Ray Moore",     "reports": 0,  "title": "Sales Representative", "department": "Sales",       "cellPhone": "617-000-0010", "officePhone": "781-000-0010", "email": "kbyrne@fakemail.com",    "city": "Boston, MA", "pic": "kathleen_byrne.jpg", "twitterId": "@fakekbyrne",    "blog": "http://coenraets.org"},
            {"id": 91, "firstName": "Dup3Amy",      "lastName": "Jones",    "managerId": 85, "managerName": "Dup3Ray Moore",     "reports": 0,  "title": "Sales Representative", "department": "Sales",       "cellPhone": "617-000-0011", "officePhone": "781-000-0011", "email": "ajones@fakemail.com",    "city": "Boston, MA", "pic": "amy_jones.jpg",      "twitterId": "@fakeajones",    "blog": "http://coenraets.org"},
            {"id": 92, "firstName": "Dup3Steven",   "lastName": "Wells",    "managerId": 84, "managerName": "Dup3John Williams", "reports": 0,  "title": "Software Architect",   "department": "Engineering", "cellPhone": "617-000-0012", "officePhone": "781-000-0012", "email": "swells@fakemail.com",    "city": "Boston, MA", "pic": "steven_wells.jpg",   "twitterId": "@fakeswells",    "blog": "http://coenraets.org"}
        ],

        findById = function (id) {
            devLog('memory-services internal-findById id('+id+')');

            var employee = null,
                l = employees.length,
                i;
            for (i = 0; i < l; i = i + 1) {
                if (employees[i].id === id) {
                    employee = employees[i];
                    break;
                }
            }
            return employee;
        },

        findByManager = function (managerId) {
            devLog('memory-services internal-findByManager managerId('+managerId+')');

            var results = employees.filter(function (element) {
                return managerId === element.managerId;
            });
            return results;
        };


    angular.module('myApp.memoryServices', [])
        .factory('Employee', [
            function () {
                return {
                    query: function () {
                        devLog('memory-services query/employees');
                        return employees;
                    },
                    get: function (employee) {
                        devLog('memory-services get/findById employee.employeeId('+employee.employeeId+')');
                        return findById(parseInt(employee.employeeId));
                    }
                }
            }])
        .factory('Report', [
            function () {
                return {
                    query: function (employee) {
                        devLog('memory-services findByManager employee.employeeId('+employee.employeeId+')');
                        return findByManager(parseInt(employee.employeeId));
                    }
                }
            }]);

}());

devLog('memory-services LOADING-COMPLETED');