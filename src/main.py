from fastapi import FastAPI
from pydantic import BaseModel
from jd_generator import generate_response

app = FastAPI(title="Skittly API", version="0.1")

class JobDescription(BaseModel):
    job_description: str

@app.post("/generate-response")
async def create_response(jd: JobDescription):
    response = generate_response(jd.job_description)
    return {"response": response}