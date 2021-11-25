export const getTasks = () => {
    return new Promise((resolve, reject) => {
        fetch('http://localhost/desVIII/proyecto2/class/consulta.php', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'GET',
        }).then(res => {
            if (!res.ok) {
                reject("Error");
            }
            return res.json()
        }).then(data => {
            resolve(data.tasks);
        }).catch(() => {
            reject("Error");
        });
    });
}

export const saveTask = (task) => {
    return new Promise((resolve, reject) => {
        fetch('http://localhost/desVIII/proyecto2/class/guardar.php', {
            headers: {
                'Content-Type': 'form-data;'
            },
            method: 'POST',
            body: JSON.stringify(task)
        }).then(res => {
            if (!res.ok) {
                reject("Error");
            }
            return res.json()
        }).then(data => {
            resolve(data);
        }).catch(() => {
            reject("Error");
        });
    });
}

export const updateTask = (task) => {
    return new Promise((resolve, reject) => {
        fetch('http://localhost/desVIII/proyecto2/class/actualizar.php', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(task)
        }).then(res => {
            if (!res.ok) {
                reject("Error");
            }
            return res.json()
        }).then(data => {
            resolve(data);
        }).catch(() => {
            reject("Error");
        });
    });
}

export const deleteTask = (id) => {
    return new Promise((resolve, reject) => {
        fetch(`http://localhost/desVIII/proyecto2/class/borrar.php?id=${id}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'GET',
        }).then(res => {
            if (!res.ok) {
                reject("Error");
            }
            return res.json()
        }).then(data => {
            resolve(data);
        }).catch(() => {
            reject("Error");
        });
    });
}