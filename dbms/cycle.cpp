#include<bits/stdc++.h>
using namespace std;

#define N 100
#define WHITE 1
#define GREY 2
#define BLACK 3
#define NIL -1
#define INF 1e8 + 5
int prevv[N + 1];
int color[N + 1];
int node = N;
bool flag = false;

void DFS_Visit(int graph[][N], int u){
    color[u] = GREY;

    for(int v=0; v<node; v++){
        if(graph[u][v]==1 && color[v]==GREY){
            flag = true;
        }
        if(graph[u][v]==1 && color[v]==BLACK){
            flag = true;
        }
        if(graph[u][v]==1 && color[v]==WHITE){
            prevv[v] = u;
            DFS_Visit(graph, v);
        }

    }

    color[u] = BLACK;
}

void DFS(int graph[][N]){
    for(int u=0; u<node; u++){
        color[u] = WHITE;
        prevv[u] = -1;
    }
    for(int u=0; u<node; u++){
        if(color[u]==WHITE){
            DFS_Visit(graph, u);
        }
    }
}

int main(){
    vector<string> x;
    string in;
    while(cin>>in){
        x.push_back(in);
    }

    int adj_matrix[N][N] = {0};
    adj_matrix[0][2] = 0;

    for(int i=0; i<x.size(); i++){
        for (int j=i+1; j<x.size(); j++){
            if(x[i][3]==x[j][3]){
                if ((x[i][0] == 'r' && x[j][0] == 'w') || (x[i][0] == 'w' && (x[j][0] == 'r' || x[j][0] == 'w')))
                {
                    int a = int(x[i][1]) - 49;
                    int b = int(x[j][1]) - 49;
                    if (a != b)
                    {
                        adj_matrix[a][b] = 1;
                    }
                }
            }
        }
    }

    DFS(adj_matrix);
    if (flag==true) cout<<"CYCLE FOUND, NOT SERIALIZABLE"<<endl;
    else cout<<"SERIALIZABLE"<<endl;
}

