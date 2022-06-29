import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import '../../Style/Component/Kanban.css';

const TaskCard = ({ item, index, datatype }) => {
	return (
		<>
			{datatype === 'left' ? (
				<div>
					<Draggable key={item.id} draggableId={item.id} index={index}>
						{provided => (
							<div
								ref={provided.innerRef}
								{...provided.draggableProps}
								{...provided.dragHandleProps}
							>
								<div className="TaskInformation">
									<h1>{item.Type}</h1>
									{/* <p>{item.Content}</p> */}
								</div>
							</div>
						)}
					</Draggable>
				</div>
			) : (
				<div>
					<Draggable key={item.id} draggableId={item.id} index={index}>
						{provided => (
							<div
								ref={provided.innerRef}
								{...provided.draggableProps}
								{...provided.dragHandleProps}
							>
								<div className="TaskInformation">
									{/* <h1>{item.Type}</h1> */}
									<p>{item.Content}</p>
								</div>
							</div>
						)}
					</Draggable>
				</div>
			)}
		</>
	);
};

export default TaskCard;

// <span className="priority">
// {item.Priority === 'High' ? (<RedArrow />) : item.Priority === 'Medium' ? (<YellowArrow />) : (<BlueArrow />)}
// </span>
// <div><CustomAvatar name={item.Assignee} isTable={false} size={16} /></div>
