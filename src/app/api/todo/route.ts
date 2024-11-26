import { NextResponse } from 'next/server';

let todoList: string[] = [];

export async function GET() {
  return NextResponse.json(todoList, {status: 200});
}

export async function POST(request: Request) {
  const body = await request.json();

  if(!body.task) {
    return NextResponse.json({message: "Task is required"}, {status: 400});
  }

  todoList.push(body.task);
  return NextResponse.json({task: body.task}, {status: 201});
}

export async function DELETE(request: Request) {
  const body = await request.json();

  if(!body.task) {
    return NextResponse.json({message: "Task is required to delete"}, {status: 400});
  }

  todoList = todoList.filter((task) => task !== body.task);
  return NextResponse.json({message: "Task removed successfully"}, {status: 200});  
}

export async function PUT(request: Request) {
  const { oldTask, newTask} = await request.json();

  const taskIndex = todoList.indexOf(oldTask);
  if( taskIndex !== -1) {
    todoList[taskIndex] = newTask;
    return NextResponse.json({message: "Tarefa atualizada"});
  }

  return NextResponse.json({message: "Tarefa não encontrada"}, {status: 404});
}