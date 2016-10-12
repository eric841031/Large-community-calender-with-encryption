FPHP='PD9waHANCmhlYWRlcigiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luOioiKTsNCmhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kczogR0VULCBQT1NULCBQVVQsIERFTEVURSwgT1BUSU9OUycpOw0KaGVhZGVyKCJDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCIpOw0KLy9jb25maWd1cmU9PT09PT09PT09PT09PT09PQ0KLypTZXR0aW5nKi8kZm5hbWU9InNldmVyLnR4dCI7DQovKlNldHRpbmcqLyRmbmFtZV9zdD0ic2V2ZXJfc3QudHh0IjsNCi8qU2V0dGluZyovJGtleT0iUkhlYWFsVHJydXRlIjsNCi8qU2V0dGluZyovJGdyb3VwPWFycmF5KCIiLGFycmF5KDEpLGFycmF5KDEpLGFycmF5KDEpKTsgLy9ncm91cFswXemDveaYryIiLGFycmF5KDAp5Luj6KGo5omA5pyJ5Lq6DQovLz09PT09PT09PT09PT09PT09PT09PT09PT09DQppZihzdHJjbXAoJF9QT1NUWydrZXknXSwka2V5KSE9MCkNCnsNCgllY2hvICJrZXkgZXJyIjsNCglyZXR1cm47DQp9DQppZihzdHJjbXAoJF9QT1NUWydjbWQnXSwicmVhZCIpPT0wKQ0KCWVjaG8gcmVhZCgpOw0KaWYoc3RyY21wKCRfUE9TVFsnY21kJ10sImFkZCIpPT0wKQ0KCWVjaG8gYWRkX2RhdGEoKTsNCmlmKHN0cmNtcCgkX1BPU1RbJ2NtZCddLCJkZWwiKT09MCkNCgllY2hvIHJlbW92ZV9kYXRhKCk7DQppZihzdHJjbXAoJF9QT1NUWydjbWQnXSwiZWRpdCIpPT0wKQ0KCWVjaG8gZWRpdF9kYXRhKCk7DQovKmlmKHN0cmNtcCgkX1BPU1RbJ2NtZCddLCJyZXMiKT09MCkNCglyZXNldF9kYXRhKCk7DQppZihzdHJjbXAoJF9QT1NUWydjbWQnXSwic2hvdyIpPT0wKQ0KCWVjaG8gc2hvd19kYXRhKCk7Ki8NCg0KZnVuY3Rpb24gaXNfaW5fZ3JvdXAoJHVpZCwkZ2lkKSAvL3VpZCBhbmQgZ2lkIHdpdGhvdXQgcnd4IGluZm8NCnsNCglnbG9iYWwgJGdyb3VwOw0KCSRzY2FuPWFycmF5KCRnaWQpOyAvL3RoZSBxdWV1ZSBvZiBnaWQgdGhhdCBtdXN0IGJlIHNjYW5uZWQNCglmb3IoJGlkeD0wOyRpZHg8Y291bnQoJHNjYW4pOysrJGlkeCkNCgl7DQoJCSRhcnI9JGdyb3VwWyRzY2FuWyRpZHhdXTsgLy9jdXJyZW50IHNjYW5lZCBncm91cA0KCQlmb3IoJGk9MCwkTj1jb3VudCgkYXJyKTskaTwkTjsrKyRpKQ0KCQl7IA0KCQkJJGs9JGFyclskaV07DQoJCQlpZigkaz09JHVpZCB8fCAkaz09MCkNCgkJCQlyZXR1cm4gdHJ1ZTsNCgkJCWlmKCRrPDApDQoJCQl7DQoJCQkJLy9jaGVjayEgaWYgayBkb3NlIG5vdCBpbiBzY2FuIGFycmF5LCBwdXNoIC1rIHRvIHNjYW4NCgkJCQlmb3IoJGo9MCwkak49Y291bnQoJHNjYW4pOyRqPCRqTiAmJiAkc2Nhblskal0hPS0kazsrKyRqKTsNCgkJCQlpZigkaj09JGpOKQ0KCQkJCQlhcnJheV9wdXNoKCRzY2FuLC0kayk7DQoJCQl9DQoJCX0NCgl9DQoJcmV0dXJuIGZhbHNlOw0KfQ0KZnVuY3Rpb24gcmVhZCgpDQp7DQoJZ2xvYmFsICRncm91cDsNCglnbG9iYWwgJGZuYW1lOw0KCSRkYXRTPUI2NEF0b1YoJF9QT1NUWydkYXRlJ10sMCw0KTsNCgkkZGF0RT1CNjRBdG9WKCRfUE9TVFsnZGF0ZUUnXSwwLDQpOw0KCSR1aWQ9QjY0QXRvVigkX1BPU1RbJ3VpZCddLDAsMik7DQoJJHI9IiI7DQoJaWYoKCRmcD1mb3BlbkwoJGZuYW1lLCJyIixMT0NLX1NILDEwLDI1MCkpPT1mYWxzZSkNCgkJcmV0dXJuICIwIjsNCgl3aGlsZSghZmVvZigkZnApKQ0KCXsNCgkJJHN0cj1mZ2V0cygkZnApOw0KCQkkc3RyX2RhdD1CNjRBdG9WKCRzdHIsNSw0KTsNCgkJJHN0cl91aWQ9QjY0QXRvVigkc3RyLDksMik7DQoJCSRzdHJfZ2lkPUI2NEF0b1YoJHN0ciwxMSwyKTsNCgkJaWYoJGRhdFM8PSRzdHJfZGF0ICYmICRzdHJfZGF0PD0kZGF0RSAmJg0KCQkJKCgkdWlkJjB4MUZGKT09KCRzdHJfdWlkJjB4MUZGKXx8KCRzdHJfdWlkJjB4ODAwKXx8KCgkc3RyX2dpZCYweDgwMCkmJmlzX2luX2dyb3VwKCR1aWQmMHgxRkYsJHN0cl9naWQmMHgxRkYpKSkpDQoJCQkkcj0kci4kc3RyOw0KCX0NCglmY2xvc2UoJGZwKTsNCglyZXR1cm4gJHI7DQp9DQpmdW5jdGlvbiBhZGRfZGF0YSgpDQp7DQoJZ2xvYmFsICRmbmFtZTsNCglnbG9iYWwgJGZuYW1lX3N0Ow0KCWlmKHN0cmxlbigkX1BPU1RbJ3ZhbCddKT4xMDI0MDAgfHwgc3RybGVuKCRfUE9TVFsndmFsJ10pK2ZpbGVzaXplKCRmbmFtZSk-MTA0ODU3NjApDQoJCXJldHVybiAiMCI7DQoJJGRhdD1CNjRBdG9WKCRfUE9TVFsnZGF0ZSddLDAsNCk7DQoJJHVpZD1CNjRBdG9WKCRfUE9TVFsndWlkJ10sMCwyKTsNCgkkZ2lkPUI2NEF0b1YoJF9QT1NUWydnaWQnXSwwLDIpOw0KCSRlbmM9QjY0QXRvVigkX1BPU1RbJ3ZhbCddLDAsNCk7DQoJJHZhbD1zdWJzdHIoJF9QT1NUWyd2YWwnXSw0KTsNCglpZigoJGZwPWZvcGVuTCgkZm5hbWVfc3QsInIrIixMT0NLX0VYLDEwLDI1MCkpPT1mYWxzZSkNCgkJcmV0dXJuICIwIjsNCgkkZGlkPWZnZXRzKCRmcCk7DQoJJGRpZD1CNjRBdG9WKCRkaWQsMCw1KTsNCglmc2VlaygkZnAsMCxTRUVLX1NFVCk7DQoJZndyaXRlKCRmcCxWdG9CNjRBKCRkaWQrMSw1KSk7DQoJZmNsb3NlKCRmcCk7DQoJaWYoZW5jJjB4ODAwMDAwKQ0KCXsNCgkJLy9lbmNvZGUgcHJvY2Vzcw0KCX0NCgkkc3RyPShmaWxlc2l6ZSgkZm5hbWUpPDE3PyIiOiJcbiIpLlZ0b0I2NEEoJGRpZCw1KS5WdG9CNjRBKCRkYXQsNCkuVnRvQjY0QSgkdWlkLDIpLlZ0b0I2NEEoJGdpZCwyKS5WdG9CNjRBKCRlbmMsNCkuJHZhbDsNCglpZigoJGZwPWZvcGVuTCgkZm5hbWUsImEiLExPQ0tfRVgsMTAsMjUwKSk9PWZhbHNlKQ0KCQlyZXR1cm4gIjAiOwkNCglmd3JpdGUoJGZwLCRzdHIpOw0KCWZjbG9zZSgkZnApOw0KCXJldHVybiAkZGlkOw0KfQ0KZnVuY3Rpb24gcmVtb3ZlX2RhdGEoKQ0Kew0KCWdsb2JhbCAkZm5hbWU7DQoJJHVpZD1CNjRBdG9WKCRfUE9TVFsndWlkJ10sMCwyKSYweDFGRjsNCgkkZGlkPUI2NEF0b1YoJF9QT1NUWydkaWQnXSwwLDUpOw0KCSR0bXBmbmFtZT0idG1wIi4kdWlkLiIudHh0IjsNCglpZighY29weSgkZm5hbWUsJHRtcGZuYW1lKSB8fCAoJGZwPWZvcGVuTCgkZm5hbWUsInciLExPQ0tfRVgsMTAsMjUwKSk9PWZhbHNlKQ0KCQlyZXR1cm4gIjAiOw0KCWlmKCgkZnByPWZvcGVuTCgkdG1wZm5hbWUsInIiLExPQ0tfU0gsMTAsMjUwKSk9PWZhbHNlKQ0KCXsNCgkJZmNsb3NlKCRmcCk7DQoJCXJldHVybiAiMCI7DQoJfQ0KCXdoaWxlKCFmZW9mKCRmcHIpKQ0KCXsNCgkJJHN0cj1mZ2V0cygkZnByKTsNCgkJaWYoKCRzdHJfZGlkPUI2NEF0b1YoJHN0ciwwLDUpKSE9JGRpZCkNCgkJew0KCQkJZndyaXRlKCRmcCwkc3RyKTsNCgkJCWNvbnRpbnVlOw0KCQl9DQoJCSRzdHJfdWlkPUI2NEF0b1YoJHN0ciw5LDIpOw0KCQkkc3RyX2dpZD1CNjRBdG9WKCRzdHIsMTEsMik7DQoJCWlmKCR1aWQhPSgkc3RyX3VpZCYweDFGRikgJiYgISgkc3RyX3VpZCYweDIwMCkgJiYgISgoJHN0cl9naWQmMHgyMDApJiZpc19pbl9ncm91cCgkdWlkLCRzdHJfZ2lkJjB4MUZGKSkpDQoJCQlmd3JpdGUoJGZwLCRzdHIpOyAgIA0KCX0NCglmY2xvc2UoJGZwKTsNCglmY2xvc2UoJGZwcik7DQoJdW5saW5rKCR0bXBmbmFtZSk7DQoJcmV0dXJuICIxIjsNCn0NCmZ1bmN0aW9uIGVkaXRfZGF0YSgpDQp7DQoJZ2xvYmFsICRmbmFtZTsNCglnbG9iYWwgJGZuYW1lX3N0Ow0KCWlmKHN0cmxlbigkX1BPU1RbJ3ZhbCddKT4xMDI0MDAgfHwgc3RybGVuKCRfUE9TVFsndmFsJ10pK2ZpbGVzaXplKCRmbmFtZSk-MTA0ODU3NjApDQoJCXJldHVybiAiMCI7DQoJJGRpZD1CNjRBdG9WKCRfUE9TVFsnZGlkJ10sMCw1KTsNCgkkdWlkPUI2NEF0b1YoJF9QT1NUWyd1aWQnXSwwLDIpOw0KCSRlbmM9QjY0QXRvVigkX1BPU1RbJ3ZhbCddLDAsNCk7DQoJJHZhbD1zdWJzdHIoJF9QT1NUWyd2YWwnXSw0KTsNCgkkdG1wZm5hbWU9InRtcCIuJHVpZC4iLnR4dCI7DQoJaWYoIWNvcHkoJGZuYW1lLCR0bXBmbmFtZSkgfHwgKCRmcD1mb3BlbkwoJGZuYW1lLCJ3IixMT0NLX0VYLDEwLDI1MCkpPT1mYWxzZSkNCgkJcmV0dXJuICIwIjsNCglpZigoJGZwcj1mb3BlbkwoJHRtcGZuYW1lLCJyIixMT0NLX1NILDEwLDI1MCkpPT1mYWxzZSkNCgl7DQoJCWZjbG9zZSgkZnApOw0KCQlyZXR1cm4gIjAiOw0KCX0NCgkkcj0iMSI7DQoJJGY9ZmFsc2U7DQoJd2hpbGUoIWZlb2YoJGZwcikpDQoJew0KCQkkc3RyPWZnZXRzKCRmcHIpOw0KCQkkc3RyX2RpZD1CNjRBdG9WKCRzdHIsMCw1KTsNCgkJJHIuPSIjIi4kc3RyX2RpZDsNCgkJaWYoKCRzdHJfZGlkPUI2NEF0b1YoJHN0ciwwLDUpKSE9JGRpZCkNCgkJew0KCQkJJHIuPSJbRF0iOw0KCQkJZndyaXRlKCRmcCwoJGY_IlxuIjoiIikuJHN0cik7DQoJCQkkZj1mYWxzZTsNCgkJCWNvbnRpbnVlOw0KCQl9DQoJCSRzdHJfdWlkPUI2NEF0b1YoJHN0ciw5LDIpOw0KCQkkc3RyX2dpZD1CNjRBdG9WKCRzdHIsMTEsMik7CQkNCgkJaWYoJHVpZD09KCRzdHJfdWlkJjB4MUZGKSB8fCAoJHN0cl91aWQmMHg0MDApIHx8ICgoJHN0cl9naWQmMHg0MDApJiZpc19pbl9ncm91cCgkdWlkLCRzdHJfZ2lkJjB4MUZGKSkpDQoJCXsNCgkJCSRzdHI9c3Vic3RyKCRzdHIsMCwxMykuVnRvQjY0QSgkZW5jLDQpLiR2YWw7DQoJCQkkZj10cnVlOw0KCQl9DQoJCWlmKGVuYyYweDgwMDAwMCkNCgkJew0KCQkJLy9hZGQgcG9zIGNvdW50IHRvIHN0cmxlbiBvZiB2YWwNCgkJfQ0KCQlmd3JpdGUoJGZwLCRzdHIpOw0KCX0NCglmY2xvc2UoJGZwKTsNCglmY2xvc2UoJGZwcik7DQoJdW5saW5rKCR0bXBmbmFtZSk7DQoJcmV0dXJuICRyOw0KfQ0KLypmdW5jdGlvbiByZXNldF9kYXRhKCkNCnsNCglnbG9iYWwgJGZuYW1lOw0KCWdsb2JhbCAkZm5hbWVfc3Q7DQoJZmlsZV9wdXRfY29udGVudHMoJGZuYW1lLCIiKTsNCglmaWxlX3B1dF9jb250ZW50cygkZm5hbWVfc3QsIkFBQUFBQUFBQUFBQUFBQUFBQUFBIik7DQp9DQpmdW5jdGlvbiBzaG93X2RhdGEoKQ0Kew0KCWdsb2JhbCAkZm5hbWU7DQoJZ2xvYmFsICRmbmFtZV9zdDsNCglyZXR1cm4gImNvbnRlbnQ6Ii5maWxlX2dldF9jb250ZW50cygkZm5hbWUpLiJcbnN0YXR1czpcbiIuZmlsZV9nZXRfY29udGVudHMoJGZuYW1lX3N0KTsNCn0qLw0KLypmb3BlbmxpYiovDQpmdW5jdGlvbiBmb3BlbkwoJGZuYW1lLCRydywkTCwkTiwkbXMpDQp7DQoJaWYoKCRmcD1mb3BlbigkZm5hbWUsJHJ3KSk9PWZhbHNlKQ0KCQlyZXR1cm4gZmFsc2U7DQoJZm9yKCRpPTA7JGk8JE4gJiYgIWZsb2NrKCRmcCwkTCk7KyskaSkNCgkJdXNsZWVwKCRtcyoxMDAwKTsNCglpZigkaTwkTikNCgkJcmV0dXJuICRmcDsNCglmY2xvc2UoJGZwKTsNCglyZXR1cm4gZmFsc2U7DQp9DQovKkI2NGxpYiovDQpmdW5jdGlvbiBCNjRBdG9WKCRicywkcG9zLCROKQ0Kew0KCSRrPTA7DQoJZm9yKCRpPTA7JGk8JE47KyskaSkNCgl7DQoJCSRhPW9yZChzdWJzdHIoJGJzLCRwb3MrJGksMSkpOy8vJGJzWyRwb3MrJGldLmNoYXJDb2RlQXQoKTsNCgkJaWYoMHg0MTw9JGEgJiYgJGE8PTB4NUEpDQoJCQkkaz0kazw8NnwkYS0weDQxOw0KCQllbHNlIGlmKDB4NjE8PSRhICYmICRhPD0weDdBKQ0KCQkJJGs9JGs8PDZ8JGEtMHg2MSsyNjsNCgkJZWxzZSBpZigweDMwPD0kYSAmJiAkYTw9MHgzOSkNCgkJCSRrPSRrPDw2fCRhLTB4MzArNTI7DQoJCWVsc2UgaWYoJGE9PTB4MkQpIC8vIC0gDQoJCQkkaz0kazw8Nnw2MjsNCgkJZWxzZSBpZigkYT09MHg1RikgLy8gXw0KCQkJJGs9JGs8PDZ8NjM7DQoJfQ0KCXJldHVybiAkazsNCn0NCmZ1bmN0aW9uIFZ0b0I2NEEoJGssJE4pDQp7DQoJJEE9IkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5LV8iOw0KCSRyPSIiOw0KCWZvcigkaT0wOyRpPCROOysrJGkpDQoJew0KCQkkcj1zdWJzdHIoJEEsJGsmMHgzRiwxKS4kcjsNCgkJJGs9JGs-PjYmMHg3RkZGRkZGRjsNCgl9DQoJcmV0dXJuICRyOw0KfQ0KPz4NCg==';
FHTML='PCFET0NUWVBFIGh0bWw-DQo8aHRtbD4NCjxoZWFkPg0KPG1ldGEgY2hhcnNldD0idXRmLTgiPg0KPHRpdGxlIGlkPSJUaXRsZSI-5pyq5ZG95ZCNPC90aXRsZT4NCjxtZXRhIG5hbWU9InZpZXdwb3J0IiBjb250ZW50PSJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wLCB1c2VyLXNjYWxhYmxlPW5vLCBtaW5pbXVtLXNjYWxlPTEuMCwgbWF4aW11bS1zY2FsZT0xLjAiIC8-DQo8bGluayByZWw9InN0eWxlc2hlZXQiIHR5cGU9InRleHQvY3NzIiBocmVmPSJjc3MvRGF0ZVNlbGVjdG9yLmNzcyI-DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KI2RldntkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDoyMGVtO3JpZ2h0OjJweDtib3JkZXI6MXB4IGRhc2hlZCBncmF5O3BhZGRpbmc6MC41ZW19DQojcGFuZWwxe3dpZHRoOiAxMDAlO21heC13aWR0aDoyMGVtO30NCg0KLmNhbCB0ZC5ldnR7YmFja2dyb3VuZC1jb2xvcjogY3lhbjt9DQppbWcuRlJ7ZmxvYXQ6cmlnaHQ7fQ0KI2xhYmVse2Rpc3BsYXk6aW5saW5lLWJsb2NrO2NsZWFyOmJvdGg7d2lkdGg6IDEwMCU7fQ0KZGl2LnR4dF9ldnR7Ym9yZGVyOjFweCBzb2xpZCBncmF5O2JvcmRlci1yYWRpdXM6NXB4O2NsZWFyOmJvdGg7d2lkdGg6IDk4JTttYXJnaW46MXB4O30NCg0KI3BhZ2Uye2NsZWFyOmJvdGg7fQ0KI3R4dF9BZGR7ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlO21hcmdpbjowcHg7fQ0KYnV0dG9uLkZSe2Zsb2F0OnJpZ2h0O30NCjwvc3R5bGU-DQo8c2NyaXB0IHR5cGU9InRleHQvamF2YXNjcmlwdCIgc3JjPSJjb25maWcuanMiPjwvc2NyaXB0Pg0KPHNjcmlwdCB0eXBlPSJ0ZXh0L2phdmFzY3JpcHQiIHNyYz0iamF2YXNjcmlwdC9EYXRlU2VsZWN0b3IuanMiPjwvc2NyaXB0Pg0KPHNjcmlwdCB0eXBlPSJ0ZXh0L2phdmFzY3JpcHQiIHNyYz0iamF2YXNjcmlwdC91dGY4YjY0LmpzIj48L3NjcmlwdD4NCjxzY3JpcHQgdHlwZT0idGV4dC9qYXZhc2NyaXB0IiBzcmM9ImphdmFzY3JpcHQvcGhwLmpzIj48L3NjcmlwdD4NCjxzY3JpcHQgdHlwZT0idGV4dC9qYXZhc2NyaXB0IiBzcmM9ImphdmFzY3JpcHQvc3ZnX2NoZWNrYm94LmpzIj48L3NjcmlwdD4NCjxzY3JpcHQgdHlwZT0idGV4dC9qYXZhc2NyaXB0IiBzcmM9ImphdmFzY3JpcHQvQnl0ZVN0cmVhbS5qcyI-PC9zY3JpcHQ-DQo8c2NyaXB0IHR5cGU9InRleHQvamF2YXNjcmlwdCIgc3JjPSJqYXZhc2NyaXB0L0NoYXJFbmNvZGluZy5qcyI-PC9zY3JpcHQ-DQo8c2NyaXB0IHR5cGU9InRleHQvamF2YXNjcmlwdCIgc3JjPSJqYXZhc2NyaXB0L0FFUy5qcyI-PC9zY3JpcHQ-DQo8c2NyaXB0IHR5cGU9InRleHQvamF2YXNjcmlwdCIgc3JjPSJqYXZhc2NyaXB0L0NCQ1IuanMiPjwvc2NyaXB0Pg0KPHNjcmlwdCB0eXBlPSJ0ZXh0L2phdmFzY3JpcHQiIHNyYz0iamF2YXNjcmlwdC9TSEEzLmpzIj48L3NjcmlwdD4NCjxzY3JpcHQgdHlwZT0idGV4dC9qYXZhc2NyaXB0IiA-DQp2YXIgZGF0ZV9vYmosZ19vYmosZmlsdGVyX29iaixkaXNwbGF5X21vZGU9MTsNCnZhciBwaHBfc3RyPSIiOw0KdmFyIFN0eWxlQXJyYXk9W1tdXTsNCnZhciBwaHBfcmVzPSIiOw0KZnVuY3Rpb24gaW5pdCgpDQp7DQoJZG9jdW1lbnQuIGdldEVsZW1lbnRCeUlkKCJUaXRsZSIpLmlubmVySFRNTD1jb25zdF90aXRsZTsNCgl7Ly_nlKLnlJ_nvqTntYTpgbjllq4NCglnX29iaj1kb2N1bWVudCAuZ2V0RWxlbWVudEJ5SWQoImdyb3VwIik7DQoJZm9yKHZhciBpPTAsb3A7aTxncm91cC5sZW5ndGg7KytpKQ0KCXsNCgkJZ19vYmouYXBwZW5kQ2hpbGQob3A9ZG9jdW1lbnQuIGNyZWF0ZUVsZW1lbnQoIm9wdGlvbiIpKTsNCgkJb3AuaW5uZXJIVE1MPWdyb3VwW2ldOw0KCX0NCgl9Ly89PT09PT09PT09DQoJZG9jdW1lbnQgLmdldEVsZW1lbnRCeUlkKCJkYXRlIikuYXBwZW5kQ2hpbGQoZGF0ZV9vYmo9Y3JlYXRlQ2FsZW5kYXIoIm9uU2VsZWN0Q2VsbCgpIiwib25DaGFuZ2VQYWdlKCkiLGNia18zKSk7DQoJd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoInJlc2l6ZSIsIFJlc2l6ZUZ1bmN0aW9uKTsNCgl2YXIgZD1kYXRlX29iai5HZXREYXRlKCk7DQoJUmVzaXplRnVuY3Rpb24oKTsJDQoJb25DaGFuZ2VQYWdlKCk7DQoJZG9jdW1lbnQgLmdldEVsZW1lbnRCeUlkKCJsYWJlbCIpLmFwcGVuZENoaWxkKGZpbHRlcl9vYmo9Y3JlYXRlU3ZnQ2hlY2tCb3hCYXIodXNlcl9jb2xvcnMuY29uY2F0KGdyb3VwX2NvbG9ycyksInBocGNia18xKCkiKSk7DQp9DQpmdW5jdGlvbiBTQ0JDbGljaygpDQp7DQoJdmFyIEE9W107DQoJZm9yKHZhciBpPTAsY29sb3Jfc3RyLGo7aTxmaWx0ZXJfb2JqLmNoaWxkcmVuLmxlbmd0aDsrK2kpDQoJew0KCQlpZihmaWx0ZXJfb2JqLmNoaWxkcmVuW2ldLmNoZWNrZWQpDQoJCXsNCgkJCWNvbG9yX3N0cj1maWx0ZXJfb2JqLmNoaWxkcmVuW2ldLmNoaWxkcmVuWzBdLmdldEF0dHJpYnV0ZU5TKG51bGwsInN0eWxlIikubWF0Y2goLyMuezZ9LylbMF07DQoJCQlmb3Ioaj0wO2o8dXNlcl9jb2xvcnMubGVuZ3RoICYmIHVzZXJfY29sb3JzW2pdIT1jb2xvcl9zdHI7KytqKTsNCgkJCWlmKGo8dXNlcl9jb2xvcnMubGVuZ3RoKQ0KCQkJew0KCQkJCUEucHVzaChqKzEpOw0KCQkJCWNvbnRpbnVlOw0KCQkJfQ0KCQkJZm9yKGo9MDtqPGdyb3VwX2NvbG9ycy5sZW5ndGggJiYgZ3JvdXBfY29sb3JzW2pdIT1jb2xvcl9zdHI7KytqKTsNCgkJCWlmKGo8Z3JvdXBfY29sb3JzLmxlbmd0aCkNCgkJCQlBLnB1c2goLWotMSk7DQoJCX0NCgl9DQoJcGhwX3N0cj1waHBfcmVzLnRyaW0oKS5zcGxpdCgiXG4iKTsNCgl2YXIgdWlkLGdpZDsNCglmb3IodmFyIGk9MCxqO2k8cGhwX3N0ci5sZW5ndGg7KQ0KCXsvL-agueaTmkNoZWNrQm946LOH5paZ77yM56-p6YG4cGhwX3N0cg0KCQl1aWQ9QjY0QXRvVihwaHBfc3RyW2ldLDksMikmMHgxRkY7DQoJCWdpZD1CNjRBdG9WKHBocF9zdHJbaV0sMTEsMikmMHgxRkY7DQoJCWZvcihqPTA7ajxBLmxlbmd0aCAmJiAhKGdpZD09MCYmdWlkPT1BW2pdKSAmJiBnaWQhPS1BW2pdOysraik7DQoJCWlmKGo9PUEubGVuZ3RoKSAvL-aykuaJvuWIsA0KCQl7DQoJCQlwaHBfc3RyW2ldPXBocF9zdHJbcGhwX3N0ci5sZW5ndGgtMV07DQoJCQktLXBocF9zdHIubGVuZ3RoOw0KCQl9DQoJCWVsc2UNCgkJCSsraTsNCgl9DQp9DQpmdW5jdGlvbiBvbkNoYW5nZVBhZ2UoKQ0Kew0KCS8v5q2k5pmC5bey57aT6Ieq5YuV55Wr5aW96KGo5qC8DQoJUmVzaXplRnVuY3Rpb24oKTsNCgkvL-WQkXBocOafpeipouizh-aWmQ0KCXZhciBkPWRhdGVfb2JqLlNob3dEYXRlOw0KCS8v5ZCRc2V2ZXLoroDlj5boqbLmnIjos4fmlpkNCgljYWxsX3BocChjb25zdF9zZXZlcg0KCQksImNtZD1yZWFkJmtleT0iK2tleQ0KCQkJKyImZGF0ZT0iK1Z0b0I2NEEoKGQueSoxMitkLm0pKjMxKzEsNCkNCgkJCSsiJmRhdGVFPSIrVnRvQjY0QSgoZC55KjEyK2QubSsxKSozMSw0KQ0KCQkJKyImdWlkPSIrVnRvQjY0QShtZSwyKQ0KCQksJ3BocF9yZXM9cGhwX3N0cj1odHRwLnJlc3BvbnNlVGV4dDtwaHBjYmtfMSgpOycNCgkJLGRvY3VtZW50IC5nZXRFbGVtZW50QnlJZCgic3QiKSk7DQp9DQpmdW5jdGlvbiBzb3J0X2J5KGEsYikNCnsNCglyZXR1cm4gYS5zdWJzdHIoNSkubG9jYWxlQ29tcGFyZShiLnN1YnN0cig1KSk7DQp9DQpmdW5jdGlvbiBnZXRfa2V5X2Zyb21fcHdkKG4pIC8vcmV0dXJuIGtleT1baW50LGludCxpbnQsaW50XSBhdCBwd2QuanMNCnsNCgl2YXIgYWVzX2tleT1bXTsNCgl2YXIgYnM9bmV3IEJ5dGVTdHJlYW07DQoJYnMucHV0QmFzZTY0U3RyKHB3ZC5zdWJzdHIoTWF0aC5mbG9vcihuKjY0LzMpLDI0KSk7DQoJZm9yKHZhciBpPTAsaWk9biUzKjI7aTw0OysraSkNCgl7DQoJCWFlc19rZXlbaV09KGJzLmdldF9ieXRlKGkqNCswKSYweEZGPj4-aWkpfA0KCQkoYnMuZ2V0X2J5dGUoaSo0KzEpPDw4LWlpKXwNCgkJKGJzLmdldF9ieXRlKGkqNCsyKTw8MTYtaWkpfA0KCQkoYnMuZ2V0X2J5dGUoaSo0KzMpPDwyNC1paSl8DQoJCShicy5nZXRfYnl0ZShpKjQrNCkmMHhGRj4-PjgtaWkpPDwzMi1paTsNCgl9DQoJcmV0dXJuIGFlc19rZXk7DQp9DQpmdW5jdGlvbiBwaHBjYmtfMSgpDQp7DQoJaWYoZGlzcGxheV9tb2RlKQ0KCQlTQ0JDbGljaygpOw0KCWVsc2UNCgkJcGhwX3N0cj1waHBfcmVzLnRyaW0oKS5zcGxpdCgiXG4iKTsNCglwaHBfc3RyLnNvcnQoc29ydF9ieSk7DQoJU3R5bGVBcnJheT1bWyJldnQiXV07DQoJdmFyIGosayx0Ow0KCWZvcihqPTA7ajxwaHBfc3RyLmxlbmd0aDsrK2opIC8v6JmV55CGU3R5bGVBcnJheQ0KCXsNCgkJaz1CNjRBdG9WKHBocF9zdHJbal0sNSw0KTsNCgkJLy_lpoLmnpzmmK9naWQ9PTAgY29sb3I9dXNlcl9jb2xvclt1aWQtMV07LOWmguaenOaYr2dpZCE9MCBjb2xvcj11c2VyX2NvbG9yW2dpZC0xXTsNCgkJdWlkPUI2NEF0b1YocGhwX3N0cltqXSw5LDIpJjB4MUZGOw0KCQlnaWQ9QjY0QXRvVihwaHBfc3RyW2pdLDExLDIpJjB4MUZGOw0KCQl2YXIgc3F1YXJlX2NvbG9yPWdpZD09MD91c2VyX2NvbG9yc1t1aWQtMV06Z3JvdXBfY29sb3JzW2dpZC0xXTsNCgkJLy_lpoLmnpzmspLmnInlkIzkuIDlpKnmspLmnInph43opobnmoTpoY_oibLmiY3liqDlhaUNCgkJaWYoZGlzcGxheV9tb2RlKQ0KCQl7DQoJCQlmb3IodD1TdHlsZUFycmF5WzBdLmxlbmd0aC0xO3Q-PTAgJiYgayUzMT09U3R5bGVBcnJheVswXVt0XS5kOy0tdCkNCgkJCQlpZihTdHlsZUFycmF5WzBdW3RdLmM9PXNxdWFyZV9jb2xvcikNCgkJCQl7DQoJCQkJCXQ9LTI7DQoJCQkJCWJyZWFrOw0KCQkJCX0NCgkJCWlmKHNxdWFyZV9jb2xvciE9bnVsbCAmJiB0Pi0yKQ0KCQkJCVN0eWxlQXJyYXlbMF0ucHVzaCh7ZDprJTMxLGM6c3F1YXJlX2NvbG9yfSk7DQoJCX0NCgkJZWxzZQ0KCQkJU3R5bGVBcnJheVswXS5wdXNoKHtkOmslMzEsYzpudWxsfSk7DQoJCWs9QjY0QXRvVihwaHBfc3RyW2pdLDEzLDQpOw0KCQlpZigoayYweDgwMDAwMCkgJiYgIShrJjB4NDAwMDAwKSkNCgkJey8v6Kej5a-GDQoJCQl2YXIgYWVzX2tleT1nZXRfa2V5X2Zyb21fcHdkKGsmMHgzRkZGRkYpOw0KCQkJdmFyIGJzMj1uZXcgQnl0ZVN0cmVhbTsNCgkJCWJzMi5wdXRCYXNlNjRTdHIocGhwX3N0cltqXS5zdWJzdHIoMTcpLnJlcGxhY2UoLyEvZywiPSIpKTsNCgkJCXBocF9zdHJbal09cGhwX3N0cltqXS5zdWJzdHIoMCwxNykrY2JjUl9kZWNvZGUoYnMyLGFlc19rZXksdXRmOF9kZWMpOw0KCQl9DQoJCWs9cGhwX3N0cltqXS5zdWJzdHIoMTcpLnJlcGxhY2UoL1xcbi9nLCJcbiIpLnJlcGxhY2UoL1xcXG4vZywiXFxcXG4iKS5yZXBsYWNlKC9cXFxcL2csIlxcIik7DQoJCXBocF9zdHJbal09cGhwX3N0cltqXS5zdWJzdHIoMCwxNykrazsNCgl9DQoJDQoJQ2FsZW5kYXJSZWZyZXNoQmFjayhkYXRlX29iaik7IC8v5pu05paw55Wr6Z2i5pel5q2355Wr6Z2iDQoJQ2FsZW5kYXJSZWZyZXNoRnJvbnQoZGF0ZV9vYmopOyAvL-abtOaWsOmBuOaTh-aMiemIlQ0KCW9uU2VsZWN0Q2VsbCgpOw0KfQ0KZnVuY3Rpb24gY2JrXzMoY2VsbCxrKQ0Kew0KCWlmKGs9PSIiKQ0KCQlyZXR1cm47DQoJaz1wYXJzZUludChrKTsNCgl2YXIgQT1TdHlsZUFycmF5WzBdOw0KCXZhciBDVD1jZWxsLmNoaWxkTm9kZXNbMF07DQoJZm9yKHZhciBpPTEsYz0wLHRwPW51bGwsdHA7aTxBLmxlbmd0aDsrK2kpDQoJCWlmKGs9PUFbaV0uZCkNCgkJew0KCQkJaWYoZGlzcGxheV9tb2RlKQ0KCQkJew0KCQkJCWlmKHRwPT1udWxsKQ0KCQkJCXsNCgkJCQkJY2VsbC5hcHBlbmRDaGlsZCh0cD1kb2N1bWVudCAuY3JlYXRlRWxlbWVudCgiZGl2IikpOw0KCQkJCQl0cC5zZXRBdHRyaWJ1dGUoInN0eWxlIiwiXA0KCQkJCQkJCXdpZHRoOjEwMCU7XA0KCQkJCQkJCWhlaWdodDo1cHg7XA0KCQkJCQkJCW1hcmdpbi1sZWZ0Oi0xMDAlO1wNCgkJCQkJCQltYXJnaW4tYm90dG9tOi01cHg7XA0KCQkJCQkJCWxlZnQ6MTAwJTtcDQoJCQkJCQkJYm90dG9tOjVweDtcDQoJCQkJCQkJdGV4dC1hbGlnbjpsZWZ0O1wNCgkJCQkJCQlwb3NpdGlvbjpyZWxhdGl2ZTsiKTsNCgkJCQl9DQoJCQkJdHAuYXBwZW5kQ2hpbGQodD1kb2N1bWVudCAuY3JlYXRlRWxlbWVudCgiZGl2IikpOw0KCQkJCXQuc2V0QXR0cmlidXRlKCJzdHlsZSIsIlwNCgkJCQkJCQliYWNrZ3JvdW5kOiIrQVtpXS5jKyI7XA0KCQkJCQkJCXdpZHRoOjVweDtcDQoJCQkJCQkJaGVpZ2h0OjVweDtcDQoJCQkJCQkJbWFyZ2luLWxlZnQ6LTVweDtcDQoJCQkJCQkJbWFyZ2luLWJvdHRvbTotNXB4O1wNCgkJCQkJCQlsZWZ0OiIrKDYqKytjKSsicHg7XA0KCQkJCQkJCXBvc2l0aW9uOnJlbGF0aXZlOyIpOw0KCQkJfQ0KCQkJZWxzZQ0KCQkJCWNlbGwuc2V0QXR0cmlidXRlKCJjbGFzcyIsQVswXSk7DQoJCX0NCn0NCmZ1bmN0aW9uIG9uU2VsZWN0Q2VsbCgpDQp7DQoJdmFyIGQ9ZGF0ZV9vYmouR2V0RGF0ZSgpOw0KCXZhciBzcmg9VnRvQjY0QSgoZC55KjEyK2QubSkqMzErZC5kLDQpOw0KCXZhciBzdHI9IiI7DQoJdmFyIGssdCx0ZCxncm91cF9uYW1lOw0KCXZhciBmZzsNCgl2YXIgY3VyX29iaj1kb2N1bWVudCAuZ2V0RWxlbWVudEJ5SWQoImN1cnJlbnRfZXZlbnQiKTsNCgljdXJfb2JqLmlubmVySFRNTD0iIjsNCglmb3IodmFyIGk9MDtpPHBocF9zdHIubGVuZ3RoOysraSkNCgl7DQoJCWs9cGhwX3N0cltpXS5zZWFyY2goc3JoKTsNCgkJaWYoaz09NSkNCgkJew0KCQkJdmFyIHB3ZF9uZWVkPShCNjRBdG9WKHBocF9zdHJbaV0sMTMsNCkmMHg0MDAwMDApOw0KCQkJdmFyIHB3ZF91c2U9KEI2NEF0b1YocGhwX3N0cltpXSwxMyw0KSYweDgwMDAwMCk7DQoJCQlmZz1kb2N1bWVudCAuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpOw0KCQkJZmcuYXBwZW5kQ2hpbGQodGQ9ZG9jdW1lbnQuIGNyZWF0ZUVsZW1lbnQoImRpdiIpKTsNCgkJCXRkLnNldEF0dHJpYnV0ZSgiY2xhc3MiLCJ0eHRfZXZ0Iik7DQoJCQkvL-mXnOmWieaMiemIlQ0KCQkJdGQuYXBwZW5kQ2hpbGQodD1kb2N1bWVudC4gY3JlYXRlRWxlbWVudCgiaW1nIikpOw0KCQkJdC5zZXRBdHRyaWJ1dGUoInNyYyIsImltYWdlcy9jbG9zZS5zdmciKTsNCgkJCXQuc2V0QXR0cmlidXRlKCJjbGFzcyIsIkZSIik7DQoJCQl0LnNldEF0dHJpYnV0ZSgib25jbGljayIsIm9uQ2xpY2tEZWxldGUoJyIraSsiJykiKTsNCgkJCS8v57eo6Lyv5oiW6Kej6Y6W5oyJ6YiVDQoJCQl0ZC5hcHBlbmRDaGlsZCh0PWRvY3VtZW50LiBjcmVhdGVFbGVtZW50KCJpbWciKSk7DQoJCQl0LnNldEF0dHJpYnV0ZSgic3JjIixwd2RfbmVlZD8iaW1hZ2VzL2tleS5zdmciOiJpbWFnZXMvZWRpdC5zdmciKTsNCgkJCXQuc2V0QXR0cmlidXRlKCJjbGFzcyIsIkZSIik7DQoJCQl0LnNldEF0dHJpYnV0ZSgib25jbGljayIscHdkX25lZWQ_InBhc3N3b3JkX2lucHV0KCciK2krIicpIjoic2hvd0VkaXRQYW5lbCgnIitpKyInKSIpOw0KCQkJLy_mloflrZflhaflrrkNCgkJCWdyb3VwX25hbWU9KEI2NEF0b1YocGhwX3N0cltpXSwxMSwyKSYweDFGRik7DQoJCQlpZihncm91cF9uYW1lPT0wKQ0KCQkJCWdyb3VwX25hbWU9KEI2NEF0b1YocGhwX3N0cltpXSw5LDIpJjB4ODAwKT8i5YWs6ZaLIjoi56eB5Lq6IjsNCgkJCWVsc2UNCgkJCQlncm91cF9uYW1lPWdyb3VwW2dyb3VwX25hbWUtMV07DQoJCQl0ZC5pbm5lckhUTUwrPSI8c3BhbiBzdHlsZT0nY29sb3I6Z3JheSc-Iitncm91cF9uYW1lKyhwd2RfdXNlPyIo5Yqg5a-GKSI6IiIpKyI6PC9zcGFuPjxicj4iDQoJCQkJCSsocHdkX25lZWQ_Ium7nuaTiui8uOWFpeWvhueivCI6cGhwX3N0cltpXS5zdWJzdHIoMTcpLnJlcGxhY2UoL1xuL2csIjxicj4iKSkNCgkJCWN1cl9vYmouYXBwZW5kQ2hpbGQoZmcpOw0KCQl9DQoJfQ0KfQ0KZnVuY3Rpb24gcGFzc3dvcmRfaW5wdXQocmVzdikNCnsNCgl2YXIgaz1nZXRfa2V5X2Zyb21fcHdkKEI2NEF0b1YocGhwX3N0cltyZXN2XSwxMyw0KSYweDNGRkZGRik7DQoJdmFyIHN0cj1yZXN2PDA_IiI6cGhwX3N0cltyZXN2XS5zdWJzdHIoMTcpOw0KCXZhciBwPXByb21wdCgi5a-G56K8OiIsICIiKTsNCgl2YXIgYnM9bmV3IEJ5dGVTdHJlYW07DQoJYnMucHVzaF9zdHIocCx1dGY4X2VuYyk7DQoJcD1TSEFLRTEyOCh7QTpicy5BLE46YnMuTn0sMTI4LDEpOw0KCWZvcih2YXIgaT0wO2k8NDsrK2kpDQoJCWtbaV1ePXBbaV07DQoJdmFyIGJzMj1uZXcgQnl0ZVN0cmVhbTsNCgliczIucHV0QmFzZTY0U3RyKHBocF9zdHJbcmVzdl0uc3Vic3RyKDE3KS5yZXBsYWNlKC8hL2csIj0iKSk7DQoJc3RyPWNiY1JfZGVjb2RlKGJzMixrLHV0ZjhfZGVjKS5yZXBsYWNlKC9cXG4vZywiXG4iKS5yZXBsYWNlKC9cXFxuL2csIlxcXFxuIikucmVwbGFjZSgvXFxcXC9nLCJcXCIpOw0KCXZhciByPWNvbmZpcm0oIuino-WHuuS7peS4i-ioiuaBr--8jOaYr-WQpuato-eiuu-8nyIrc3RyKTsNCglpZihyKQ0KCXsNCgkJcGhwX3N0cltyZXN2XT1waHBfc3RyW3Jlc3ZdLnN1YnN0cigwLDEzKSsiQUFBQSIrc3RyOw0KCQlvblNlbGVjdENlbGwoKTsNCgl9DQp9DQpmdW5jdGlvbiBzaG93RWRpdFBhbmVsKHJlc3YpDQp7DQoJdmFyIHN0cj1yZXN2PDA_IiI6cGhwX3N0cltyZXN2XS5zdWJzdHIoMTcpOw0KCWRvY3VtZW50IC5nZXRFbGVtZW50QnlJZCgicGFnZTEiKS5zZXRBdHRyaWJ1dGUoInN0eWxlIiwiZGlzcGxheTpub25lOyIpOw0KCWRvY3VtZW50IC5nZXRFbGVtZW50QnlJZCgidHh0X0FkZCIpLnZhbHVlPXN0cjsNCglkb2N1bWVudCAuZ2V0RWxlbWVudEJ5SWQoInBhZ2UyIikuc2V0QXR0cmlidXRlKCJzdHlsZSIsImRpc3BsYXk6YmxvY2s7Iik7DQoJZG9jdW1lbnQgLmdldEVsZW1lbnRCeUlkKCJzYXZlIikuc2V0QXR0cmlidXRlKCJvbmNsaWNrIixyZXN2PDA_IkFkZERhdGEoKSI6IkVkaXREYXRhKCIrcmVzdisiKSIpOw0KCWRvY3VtZW50IC5nZXRFbGVtZW50QnlJZCgiZ3JvdXAiKS5zZXRBdHRyaWJ1dGUoImRpc3BsYXkiLHJlc3Y8MD8iZGlzcGxheTppbmxpbmU7IjoiZGlzcGxheTpub25lOyIpOw0KCVJlc2l6ZUZ1bmN0aW9uKCk7DQp9DQpmdW5jdGlvbiBjYW5jZWxFZGl0KCkNCnsNCglkb2N1bWVudCAuZ2V0RWxlbWVudEJ5SWQoInBhZ2UyIikuc2V0QXR0cmlidXRlKCJzdHlsZSIsImRpc3BsYXk6bm9uZTsiKTsNCglkb2N1bWVudCAuZ2V0RWxlbWVudEJ5SWQoInBhZ2UxIikuc2V0QXR0cmlidXRlKCJzdHlsZSIsImRpc3BsYXk6YmxvY2s7Iik7DQp9DQpmdW5jdGlvbiBBZGREYXRhKCkNCnsNCgl2YXIgZD1kYXRlX29iai5HZXREYXRlKCk7DQoJdmFyIGdpZD1nX29iai5zZWxlY3RlZEluZGV4Oy8vPD11c2VyLmxlbmd0aD8wOmdfb2JqLnNlbGVjdGVkSW5kZXgtdXNlci5sZW5ndGg7DQoJdmFyIHVpZD1tZTsNCgl2YXIgY2tkPWRvY3VtZW50IC5nZXRFbGVtZW50QnlJZCgiUmVhZE9ubHkiKS5jaGVja2VkOw0KCWlmKGdpZDwyKQ0KCXsNCgkJdWlkfD0oZ2lkPyhja2Q_MHg4MDA6MHhFMDApOjApOw0KCQlnaWQ9MDsNCgl9DQoJZWxzZQ0KCQlnaWQ9Z2lkLTF8KGNrZD8weDgwMDoweEUwMCk7DQoJdmFyIHZhbD1kb2N1bWVudCAuZ2V0RWxlbWVudEJ5SWQoInR4dF9BZGQiKS52YWx1ZTsNCgl2YWw9dmFsLnJlcGxhY2UoL1xcL2csIlxcXFwiKS5yZXBsYWNlKC9cbi9nLCJcXG4iKTsNCglpZihkb2N1bWVudC4gZ2V0RWxlbWVudEJ5SWQoIklzRW5jIikuY2hlY2tlZCkNCgkJdmFsPWVuY29kZV9zZXR0aW5nKHZhbCk7DQoJZWxzZQ0KCQl2YWw9IkFBQUEiK3ZhbDsNCglkb2N1bWVudCAuZ2V0RWxlbWVudEJ5SWQoInBhZ2UyIikuc2V0QXR0cmlidXRlKCJzdHlsZSIsImRpc3BsYXk6bm9uZTsiKTsNCgljYWxsX3BocChjb25zdF9zZXZlcg0KCQksImNtZD1hZGQma2V5PSIra2V5DQoJCQkrIiZkYXRlPSIrVnRvQjY0QSgoZC55KjEyK2QubSkqMzErZC5kLDQpDQoJCQkrIiZ1aWQ9IitWdG9CNjRBKHVpZCwyKQ0KCQkJKyImZ2lkPSIrVnRvQjY0QShnaWQsMikNCgkJCSsiJnZhbD0iK3ZhbA0KCQksJ29uQ2hhbmdlUGFnZSgpOycNCgkJLGRvY3VtZW50IC5nZXRFbGVtZW50QnlJZCgic3QiKSk7DQoJZG9jdW1lbnQgLmdldEVsZW1lbnRCeUlkKCJwYWdlMSIpLnNldEF0dHJpYnV0ZSgic3R5bGUiLCJkaXNwbGF5OmJsb2NrOyIpOw0KCVJlc2l6ZUZ1bmN0aW9uKCk7DQp9DQpmdW5jdGlvbiBlbmNvZGVfc2V0dGluZyhvcmdfc3RyKSAvL3BvcCB1cCBkaWFsb2dzLCByZXR1cm4gZW5jb2RlZCBzdHJpbmcNCnsNCgl2YXIgcixwd2RfaGFzaCxrZXlfbixtYXhfa249TWF0aC5mbG9vcihwd2QubGVuZ3RoKjMvNjQpOw0KCWlmKGNvbmZpcm0oIuaYr-WQpuWVn-eUqOmAsumajuWuieWFqOaOquaWve-8nyIpKQ0KCXsNCgkJcHdkX2hhc2g9cHJvbXB0KCLlr4bnorw6IiwgIiIpOw0KCQlpZihwd2RfaGFzaD09IiIpDQoJCQlwd2RfaGFzaD1bMCwwLDAsMF07DQoJCWVsc2UNCgkJew0KCQkJdmFyIGJzPW5ldyBCeXRlU3RyZWFtOw0KCQkJYnMucHVzaF9zdHIocHdkX2hhc2gsdXRmOF9lbmMpOw0KCQkJcHdkX2hhc2g9U0hBS0UxMjgoe0E6YnMuQSxOOmJzLk59LDEyOCwxKTsNCgkJfQ0KCQlrZXlfbj1wYXJzZUludChwcm9tcHQoIuesrOW5vuaKiumRsOWMmSIsICIiKSk7DQoJCWlmKGtleV9uPDAgfHwga2V5X24-bWF4X2tuKQ0KCQkJa2V5X249MDsNCgl9DQoJZWxzZQ0KCXsNCgkJa2V5X249MDsNCgkJcHdkX2hhc2g9WzAsMCwwLDBdOw0KCX0NCgl2YXIgYWVzX2tleT1nZXRfa2V5X2Zyb21fcHdkKGtleV9uKTsNCglmb3IodmFyIGk9MDtpPDQ7KytpKQ0KCQlhZXNfa2V5W2ldXj1wd2RfaGFzaFtpXTsNCgkvL2FsZXJ0KG9yZ19zdHIrYWVzX2tleSk7DQoJdmFyIGJzPWNiY1JfZW5jb2RlKG9yZ19zdHIsYWVzX2tleSx1dGY4X2VuYyk7DQoJcmV0dXJuIFZ0b0I2NEEoKHB3ZF9oYXNoWzBdfHB3ZF9oYXNoWzFdfHB3ZF9oYXNoWzJdfHB3ZF9oYXNoWzNdKT8weEMwMDAwMHxrZXlfbjoweDgwMDAwMHxrZXlfbiw0KQ0KCSticy5nZXRCYXNlNjRTdHIoMCwtMSkucmVwbGFjZSgvPS9nLCIhIik7DQp9DQpmdW5jdGlvbiBFZGl0RGF0YShpZCkNCnsNCgkvL2tleSxkaWQsdWlkLHZhbA0KCXZhciB2YWw9ZG9jdW1lbnQgLmdldEVsZW1lbnRCeUlkKCJ0eHRfQWRkIikudmFsdWU7DQoJdmFsPXZhbC5yZXBsYWNlKC9cXC9nLCJcXFxcIikucmVwbGFjZSgvXG4vZywiXFxuIik7DQoJaWYoZG9jdW1lbnQuIGdldEVsZW1lbnRCeUlkKCJJc0VuYyIpLmNoZWNrZWQpDQoJCXZhbD1lbmNvZGVfc2V0dGluZyh2YWwpOw0KCWVsc2UNCgkJdmFsPSJBQUFBIit2YWw7DQoJZG9jdW1lbnQgLmdldEVsZW1lbnRCeUlkKCJwYWdlMiIpLnNldEF0dHJpYnV0ZSgic3R5bGUiLCJkaXNwbGF5Om5vbmU7Iik7DQoJY2FsbF9waHAoY29uc3Rfc2V2ZXINCgkJLCJjbWQ9ZWRpdCZrZXk9IitrZXkNCgkJCSsiJmRpZD0iK3BocF9zdHJbaWRdLnN1YnN0cigwLDUpDQoJCQkrIiZ1aWQ9IitWdG9CNjRBKG1lLDIpDQoJCQkrIiZ2YWw9Iit2YWwNCgkJLCdvbkNoYW5nZVBhZ2UoKTsnDQoJCSxkb2N1bWVudCAuZ2V0RWxlbWVudEJ5SWQoInN0IikpOw0KCWRvY3VtZW50IC5nZXRFbGVtZW50QnlJZCgicGFnZTEiKS5zZXRBdHRyaWJ1dGUoInN0eWxlIiwiZGlzcGxheTpibG9jazsiKTsNCglSZXNpemVGdW5jdGlvbigpOw0KfQ0KZnVuY3Rpb24gb25DbGlja0RlbGV0ZShpKQ0Kew0KCXZhciBkaWQ9cGhwX3N0cltpXS5zdWJzdHIoMCw1KTsNCgl2YXIgc3RyPXBocF9zdHJbaV0ubGVuZ3RoPjE3KzIwP3BocF9zdHJbaV0uc3Vic3RyKDE3LDIwKSsiLi4uIjpwaHBfc3RyW2ldLnN1YnN0cigxNyk7DQoJaWYoY29uZmlybSgi56K66KqN5Yiq6Zmk6LOH5paZOiIrc3RyKSkNCgkJY2FsbF9waHAoY29uc3Rfc2V2ZXINCgkJCSwiY21kPWRlbCZrZXk9IitrZXkNCgkJCQkrIiZkaWQ9IitkaWQNCgkJCQkrIiZ1aWQ9IitWdG9CNjRBKG1lLDIpDQoJCQksJ29uQ2hhbmdlUGFnZSgpOycNCgkJCSxkb2N1bWVudCAuZ2V0RWxlbWVudEJ5SWQoInN0IikpOw0KfQ0KZnVuY3Rpb24gUmVzaXplRnVuY3Rpb24oKQ0Kew0KCXZhciBoPXdpbmRvdyAuaW5uZXJIZWlnaHQ7DQoJdmFyIGhfc3Q9ZG9jdW1lbnQgLmdldEVsZW1lbnRCeUlkKCJzdCIpLm9mZnNldEhlaWdodDsNCgkNCgl2YXIgaDE9ZG9jdW1lbnQgLmdldEVsZW1lbnRCeUlkKCJkYXRlIikub2Zmc2V0SGVpZ2h0Ow0KCXZhciBoMj1kb2N1bWVudCAuZ2V0RWxlbWVudEJ5SWQoImxhYmVsIikub2Zmc2V0SGVpZ2h0Ow0KCWRvY3VtZW50IC5nZXRFbGVtZW50QnlJZCgiY3VycmVudF9ldmVudCIpLnNldEF0dHJpYnV0ZSgic3R5bGUiLCJoZWlnaHQ6IisoaC1oMS1oMi1oX3N0LTIwKSsicHg7b3ZlcmZsb3cteTphdXRvO3dpZHRoOjEwMCU7Iik7DQoJDQoJdmFyIGgzPWRvY3VtZW50IC5nZXRFbGVtZW50QnlJZCgic2F2ZSIpLm9mZnNldEhlaWdodDsNCglkb2N1bWVudCAuZ2V0RWxlbWVudEJ5SWQoInR4dF9BZGQiKS5zZXRBdHRyaWJ1dGUoInN0eWxlIiwiaGVpZ2h0OiIrKGgtaDMtaF9zdC0yMCkrInB4Iik7DQp9DQpmdW5jdGlvbiBzc3MoKQ0Kew0KCWlmKGdfb2JqLnNlbGVjdGVkSW5kZXgpDQoJCWRvY3VtZW50LiBnZXRFbGVtZW50QnlJZCgicmVhZG9ubHkiKS5zZXRBdHRyaWJ1dGUoInN0eWxlIiwiZGlzcGxheTppbmxpbmUtYmxvY2siKTsNCgllbHNlDQoJCWRvY3VtZW50LiBnZXRFbGVtZW50QnlJZCgicmVhZG9ubHkiKS5zZXRBdHRyaWJ1dGUoInN0eWxlIiwiZGlzcGxheTpub25lIik7DQp9DQp7Ly9kZXYNCglmdW5jdGlvbiBjaGFuZ2VfdXNlcigpIA0KCXsNCgkJbWU9ZG9jdW1lbnQuIGdldEVsZW1lbnRCeUlkKCJ1c2VyX2lkIikuc2VsZWN0ZWRJbmRleCsxOw0KCX0NCgkJDQp9DQpmdW5jdGlvbiBWaWV3KGspIC8vaz09MCB0byBnbG9iZWwNCnsNCgl2YXIgZz1kb2N1bWVudCAuZ2V0RWxlbWVudEJ5SWQoImdsb2JlbF9pbWciKTsNCgl2YXIgZj1kb2N1bWVudCAuZ2V0RWxlbWVudEJ5SWQoImZsaXRlcl9pbWciKTsNCglnLnNldEF0dHJpYnV0ZSgic3R5bGUiLGs9PTE_ImZsb2F0OnJpZ2h0OyI6ImRpc3BsYXk6bm9uZTsiKTsNCglmLnNldEF0dHJpYnV0ZSgic3R5bGUiLGs9PTA_ImZsb2F0OnJpZ2h0OyI6ImRpc3BsYXk6bm9uZTsiKTsNCglmaWx0ZXJfb2JqLnNldEF0dHJpYnV0ZSgic3R5bGUiLGs9PTE_ImRpc3BsYXk6aW5saW5lLWJsb2NrOyI6ImRpc3BsYXk6bm9uZTsiKTsNCglkaXNwbGF5X21vZGU9azsNCglwaHBjYmtfMSgpOw0KfQ0KPC9zY3JpcHQ-DQo8L2hlYWQ-DQo8Ym9keSBvbmxvYWQ9ImluaXQoKSI-DQo8ZGl2IGlkPSJwYW5lbDEiPg0KCTxkaXYgaWQ9InBhZ2UxIj4NCgkJPGRpdiBpZD0iZGF0ZSI-PC9kaXY-DQoJCTxkaXYgaWQ9ImxhYmVsIj4NCgkJCTxpbWcgc3JjPSdpbWFnZXMvYWRkLnN2Zycgb25jbGljaz0nc2hvd0VkaXRQYW5lbCgtMSknIHN0eWxlPSdmbG9hdDpyaWdodCc-DQoJCQk8aW1nIHNyYz0naW1hZ2VzL2dsb2JlbC5zdmcnIGlkPSJnbG9iZWxfaW1nIiBvbmNsaWNrPSdWaWV3KDApJyBzdHlsZT0nZmxvYXQ6cmlnaHQnPg0KCQkJPGltZyBzcmM9J2ltYWdlcy9mbGl0ZXIuc3ZnJyBpZD0iZmxpdGVyX2ltZyIgb25jbGljaz0nVmlldygxKScgc3R5bGU9J2Rpc3BsYXk6bm9uZSc-DQoJCTwvZGl2Pg0KCQk8ZGl2IGlkPSJjdXJyZW50X2V2ZW50Ij48L2Rpdj4NCgk8L2Rpdj4NCgk8ZGl2IGlkPSJwYWdlMiIgc3R5bGU9ImRpc3BsYXk6bm9uZTsiPg0KCQk8dGV4dGFyZWEgaWQ9InR4dF9BZGQiPjwvdGV4dGFyZWE-DQoJCeeZvOmAgeWIsDo8c2VsZWN0IGlkPSJncm91cCIgb25jaGFuZ2U9InNzcygpIj4NCgkJCTxvcHRpb24-6Ieq5bexPC9vcHRpb24-DQoJCQk8b3B0aW9uPuWFrOmWizwvb3B0aW9uPg0KCQk8L3NlbGVjdD4NCgkJPGRpdiBpZD0icmVhZG9ubHkiIHN0eWxlPSJkaXNwbGF5Om5vbmU7Ij48aW5wdXQgaWQ9IlJlYWRPbmx5IiB0eXBlPSJjaGVja2JveCI-5ZSv6K6APC9kaXY-DQoJCTxpbnB1dCBpZD0iSXNFbmMiIHR5cGU9ImNoZWNrYm94Ij7liqDlr4YNCgkJPGRpdj48YnV0dG9uIGlkPSJzYXZlIiBjbGFzcz0iRlIiPuWEsuWtmDwvYnV0dG9uPjxidXR0b24gY2xhc3M9IkZSIiBvbmNsaWNrPSJjYW5jZWxFZGl0KCkiPuWPlua2iDwvYnV0dG9uPjwvZGl2Pg0KCTwvZGl2Pg0KCTxkaXYgaWQ9InN0Ij48L2Rpdj4NCjwvZGl2Pg0KPC9ib2R5Pg0KPC9odG1sPg0KDQo=';