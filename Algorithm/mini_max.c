#include <stdio.h>

void insertionSort(int arr[], int n) {
    int i, key, j;
    
    for (i = 1; i < n; i++) {
        key = arr[i];
        j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}

void miniMaxSum(int arr[]) {
    int n = 5;
    insertionSort(arr, n);
    
    int i, total_min = 0, total_max = 0;
    for (i = 0; i < n - 1; i++)
        total_min += arr[i];
    for (i = n - 1; i > 0; i--)
        total_max += arr[i];
        
    printf("Total of array: %d\n", total_min + arr[n-1]);
    
    printf("Min Sum: %d\nMax Sum: %d\n", total_min, total_max);
    
    printf("Min number: ");
    printf("%d\n", arr[0]);
    
    printf("Max number: ");
    printf("%d\n", arr[n-1]);
    
    printf("Odd elements: ");
    for (i = 0; i < n; i++) {
        if (arr[i] % 2 != 0)
            printf("%d ", arr[i]);
    }
    printf("\n");
    
    printf("Even elements: ");
    for (i = 0; i < n; i++) {
        if (arr[i] % 2 == 0)
            printf("%d ", arr[i]);
    }
    printf("\n");
    
    printf("Sorted list: ");
    for (i = 0; i < 5; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");
}

int main() {
    int arr[5];
    
    printf("Please enter 5 integers: ");
    scanf("%d %d %d %d %d", &arr[0], &arr[1], &arr[2], &arr[3], &arr[4]);
    
    miniMaxSum(arr);

    return 0;
}

