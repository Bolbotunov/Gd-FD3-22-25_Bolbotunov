const BASE_URL = "https://fe.it-academy.by/AjaxStringStorage2.php"

async function doFetch(formData: FormData) {
  const response = await fetch(BASE_URL, {
    body: formData,
    method:'POST',
  })
const data = await response.json()
const result = JSON.parse(data.result)
return result
}


export async function read(name: string) {
    const formData = new FormData()

    formData.append('f', 'READ')
    formData.append('n', name)


    return doFetch(formData)
}


export async function insert(name: string, value: string) {
  const formData = new FormData()

  formData.append('f', 'INSERT')
  formData.append('n', name)
  formData.append('n', value)

  return doFetch(formData)
}

export async function locakGet(name: string, password: string) {
  const formData = new FormData()

  formData.append('f', 'LOCKGET')
  formData.append('n', name)
  formData.append('p', password)

  return doFetch(formData)
}


export async function update(name: string, password: string, value: string) {
  const formData = new FormData()

  formData.append('f', 'UPDATE')
  formData.append('n', name)
  formData.append('p', password)
  formData.append('v', value)

  return doFetch(formData)
}

