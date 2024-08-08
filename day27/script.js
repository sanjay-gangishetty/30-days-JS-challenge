let taskDetail = JSON.parse(localStorage.getItem('taskDetail')) || [];
let key = taskDetail.length ? taskDetail[taskDetail.length - 1].key + 1 : 0;
let taskToDelete = null; // Variable to hold the task key to be deleted

document.getElementById('frmSbt').addEventListener('click', async (e) => {
    try {
        e.preventDefault();
        let title = document.getElementById('title').value;
        let description = document.getElementById('description').value;
        let dueDate = document.getElementById('dueDate').value;
        const errCont = document.getElementById('err-cont');

        if (!title || !description || !dueDate) {
            errCont.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    Please fill all the fields
                </div>
            `;
            return;
        }

        const taskObj = {
            key: key++,
            title,
            description,
            dueDate
        };

        taskDetail.push(taskObj);
        localStorage.setItem('taskDetail', JSON.stringify(taskDetail));
        document.getElementById('title').value = '';
        document.getElementById('description').value = '';
        document.getElementById('dueDate').value = '';
        document.getElementById('frmSbt').textContent = 'Add';

        await renderTasks();
        errCont.style.display = 'none';
    } catch (err) {
        console.log(err);
        const errCont = document.getElementById('err-cont');
        errCont.innerHTML = `
            <div class="alert alert-danger" role="alert">
                ${err.message}
            </div>
        `;
    }
});

async function renderTasks() {
    const tbody = document.querySelector("#taskTable tbody");
    tbody.innerHTML = "";

    if (!taskDetail.length) {
        tbody.innerHTML = `
            <tr>
                <td colspan="5" class="text-center">No tasks found</td>
            </tr>
        `;
        return;
    }

    let val = 1;
    taskDetail.forEach(task => {
        const taskList = document.createElement("tr");
        taskList.innerHTML = `
            <th scope="row">${val}</th>
            <td>${task.title}</td>
            <td>${task.description}</td>
            <td>${task.dueDate}</td>
            <td>
                <button class="btn btn-primary" onclick="editTask(${task.key})">Edit</button>
                <button class="btn btn-danger" onclick="confirmDelete(${task.key})">Delete</button>
            </td>
        `;
        val++;
        tbody.appendChild(taskList);
    });
}

function confirmDelete(key) {
    taskToDelete = key; // Store the task key to be deleted
    const deleteModal = new bootstrap.Modal(document.getElementById('exampleModalToggle'));
    deleteModal.show();
}

document.getElementById('deleteConfirmationBtn').addEventListener('click', () => {
    if (taskToDelete !== null) {
        deleteTask(taskToDelete);
        taskToDelete = null; // Clear the task key after deletion
    }
    const deleteModal = bootstrap.Modal.getInstance(document.getElementById('exampleModalToggle'));
    deleteModal.hide();
});

function deleteTask(key) {
    const index = taskDetail.findIndex(task => task.key === key);
    if (index !== -1) {
        taskDetail.splice(index, 1);
        localStorage.setItem('taskDetail', JSON.stringify(taskDetail));
        renderTasks();
    }
}

function editTask(key) {
    const index = taskDetail.findIndex(task => task.key === key);
    if (index !== -1) {
        const { title, description, dueDate } = taskDetail[index];
        document.getElementById('title').value = title;
        document.getElementById('description').value = description;
        document.getElementById('dueDate').value = dueDate;
        document.getElementById('frmSbt').textContent = 'Update';
        taskDetail.splice(index, 1);
        localStorage.setItem('taskDetail', JSON.stringify(taskDetail));
        renderTasks();
    }
}

// Initial render of tasks from local storage
document.addEventListener('DOMContentLoaded', renderTasks);
