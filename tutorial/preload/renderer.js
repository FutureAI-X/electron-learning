const ele = document.getElementById('content')
ele.innerHTML = `
<p><b>Node Version</b>: ${window.version.node()}</p>
<p><b>Chrome Version</b>: ${window.version.chrome()}</p>
<p><b>Electron Version</b>: ${window.version.electron()}</p>
`

const ele_ipc = document.getElementById('content_ipc')
const ping = async () => {
    const ping_res = await window.version.ping()
    ele_ipc.innerHTML = '<p><b>IPC Message</b>: ' + ping_res + '</p>'
}
ping()