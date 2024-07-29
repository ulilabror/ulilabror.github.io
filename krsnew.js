fetch("https://kanal.umk.ac.id/mahasiswa/entrirencanastudi", {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "max-age=0",
    "content-type": "application/x-www-form-urlencoded",
    "priority": "u=0, i",
    "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Linux\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1"
  },
  "referrer": "https://kanal.umk.ac.id/mahasiswa/entrirencanastudi",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "_token=dznxzs57neEV6MsunsysibDjSHtcHqkhSButeX22&makul%5B%5D=MzNjZjEyNjQyNGI3NWNmMzIwNmZmZjkyYzI5MDExZDE0ODdiNDM2MzU4YzkwZDc1NTE2NTdjOTU2MzQ5ZjUwNTBkNmQ5ZWU1OTIxY2I1ZWVhY2VlOWI2YTdhYzMzYWZhNGIzODUxMzJlZTEwNThjZGQ3ZmQxNjU1YjZmNDI2NjFLMzJYekF2UzNzSUFwMisvMTBWcGhWR2YwVzNKL29PRi9RZVRKMDRwZ21zPQ&makul%5B%5D=ZmYwMzU4ODE2OTE5YzQxYWJiMDlhYWQ2MmNkNDAwYjg4MjRjNDE5MjllYWY2NjI5MmE2Yjc2NDY2Y2Y4NzYwMjcyYWI5ZmM2ZmE0ZDQ5Y2I4MmZhYTIwN2EzM2Y3ZTFiYTliMWZjNTZlZjJiMTA4NzYzNzJkMzViZDI5NGUzODg1alBoU0QxZHRRTi9VcFRZa3ppR1dGcFM5UUNibFRHWmQzZm1BeWtwRUlVPQ&makul%5B%5D=NTIwNTYzNGZhMTI4NmYyNmY4NGFjNjJmYWFkZmE0NGI2Y2FjOGM3MDJjY2E5M2E1YjgyZWZhMzM0Njk3OGQ3NTIwODdiOGY0NGJiYTZkYWFkOTA2ZWZjOWE5ZmQ4YWVlZWJkMDRkYjMwM2FmOWQwN2FjYTY5OTBhZDcxYTBkYTlqVC9BMkN1UzBweGVSYzZFbm1tbmx5TGZXRHZyem1tVTFwT0F0Qm9Pb0tFPQ&makul%5B%5D=YzUzOGM4ZmI0YTY0Yjc0YmU1YjE1MzUyYTE4MjUwZTRlNWQzMTQ5NjQ3MzNlYjJiZTdmNTJlYWJmNjkwNDFlYTNlMDM4MmE1ZjhkZWZhOWVjODYwNDczZmZjZjBiMzk3NjExMTUzZDEzNzUwMDRmNzIwZjQxMTRiMmQyZTZiZWYwUWM0MW5XeEJ4R2EzVVJjVjdZekpLU2ZTd0ZZbVB6TXJlM0I3dXR2ZlpFPQ&makul%5B%5D=MmRkMzk2MDlkZWZlODg4YmVjZDNiMTI0MGE3NzZiNGFmZjVmNzdlZmE5ZTM1ZGU5ZmZhMjkyMjg1YjhlMDY0MGFmZWU0NDA1NjQ4NGIwMDI0MGM5ZDhlY2NlMzdjYzIzMjgyN2Q0ZmI0MmNkNjRmZDQ3MzIyZGY3OGY4YzA2MGVrL0thVUgzUlFzYjIrQ3JEZlZtd3BoUkRXVmhlYW04Qm9tZnE5anVQZmZNPQ&makul%5B%5D=ZDdkMmVjOWExMDQ5NzBkNGY3MzhlMTYwNjljM2U2NGQ5YjU3OGIxZmNmZTBmMjQ4YjVjODViMmNmM2MxOGE1NjIzMGYzNzY0ZTRhMTk5OWRkY2VkZGYyYzdiMjQ0ZWIzNzQxZGYxMDhmOTg0MDM4MDJmNjU4OTlkMzI4MmMxZTBwaHhuajZraWp3YVNySVlyTGl0RWM0MzZTL2FDMVNBZFl2dWFFblBYSVgwPQ&makul%5B%5D=OTY1NTQ5NDZiNmE0Mjk0M2Q3NGIwNWM4YWZkODZjZGEwOWJmOGJlYzZhMDFjNWU0YWIxOTQ2NjZkZTFmMDNlMzIyNDQ2MDg3MDM5OTYxOTVkYzQwNTQxNGYxNTQ1NzNkZTg3MjBiOTY5ODFlOGY2OGFjMmRkZTE0ZWM0OTViY2RFOUxGeG9laGdmNVU3VkZsQWMyM05HaHBkK1pIWjlweEtJWllqZ0RWd3g4PQ&makul%5B%5D=ZWE4NzU3YzA0ZDE2MzkzNGQzNDM1M2VhMzJjYmNkNjRlMTk1NDBiZTQ4NzNiOTk3ZTM1ZThkNzM0MzEwMzc2Y2EwMWFjY2UyYmFhZmFiNjdlOTk3OTExNzA5MjAwNTViOTZjZDM0MzhlYjY0NmNkZjU0MzBmNWYwODVkMTcyNGVBMjRPM2taMUhuK3FDK3pVN2ZJTE45R3dwQVY2eXhUUERWVHUxb0Y3NWRNPQ&makul%5B%5D=NzIzNjRjM2Q2NDVjOWJkNGM5NzBlMTU0ZjVkYTEyNTA3OGExNDc0YmI0OTI1MTZmZDQwYWZlYzI3MzMwYmEwZTkzMGQzZTk1NTQxMWI4OGFhYjVmMzdlODc5OGI4YWUwNTljZjdlNjFlZWQxNzQ5ZGJlYmE4NTY0ZjdiZmMzMTU3QXROZ1hPVzg1TldjdytrRE90SDEvYWdESnAvcGVnVDN1VDZaZVlzZmcwPQ&makul%5B%5D=YzRlZTlmNTRlMmYyOTFiNzdkMjNjY2YyZWQ3ZTQxMzcwZTZhZjIzNGUxY2QyZWYxMDc4NjZiZjgyNmQ3YWJkZWYwM2ZjYzMzOTdiNmFjNGI3MGYyZjJiZjdjODAyODkwYzUyNDBlM2YxN2M4ZjRhYjk0OWIxYmU1ZjA1YmRlMzZabnNZeExZWlo4d1YxbDRnVldvbXNzbFpFRnh2T2pqeUFvaUlCKzB2NnRFPQ&submit=",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});
